import { useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaAngleLeft, FaAngleUp } from 'react-icons/fa6'

import { cn } from '~/lib/utils'
import { noEmpty, strMatches } from '~/utils'
import { Option } from './Option'
import {
  Body,
  Container,
  EmptyListItem,
  FilterInput,
  IconWrapper,
  Label,
  LabelContainer,
  LabelWrapper,
  List,
  ListBackButton,
  ListBackButtonWrapper,
  ListWrapper,
  SelectFieldContainer
} from './styles'
import { OptionProps, SelectFieldData } from './types'

type SelectEventHandler = (option: OptionProps) => void

type SelectFieldProps<DataType = any> = {
  data: Array<DataType>
  label?: string
  onChange?: (selected: DataType) => void
}

type SelectFieldComponent<DataType = any> = React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement> &
    React.PropsWithChildren &
    SelectFieldProps<DataType>
>

type ListHeight = 'unset' | number

type ListDataStack = Array<SelectFieldData>

export const SelectField: SelectFieldComponent<OptionProps> = ({
  data,
  defaultValue,
  ...props
}) => {
  const [query, setQuery] = useState<string>('')
  const [typing, setTyping] = useState<boolean>(false)
  const [opened, setOpened] = useState<boolean>(false)
  const [listHeight, setListHeight] = useState<ListHeight>('unset')
  const [selectedOption, setSelectedOption] = useState<OptionProps>()
  const [listDataStack, setListDataStack] = useState<ListDataStack>([data])
  const [closeOnSelectFieldContainerBlur, setCloseOnSelectFieldContainerBlur] =
    useState<boolean>(true)

  const selectFieldContainerRef = useRef<HTMLDivElement>(null)

  const Icon = opened ? FaAngleUp : FaAngleDown

  useEffect(() => {
    setListDataStack([data])
  }, [data])

  const defaultOption = resolveDefaultValue(defaultValue)

  function resolveDefaultValue(defaultValue: any): OptionProps | undefined {
    if (!noEmpty(defaultValue)) {
      return undefined
    }

    const defaultOptionObject = data.find(({ value }) => value === defaultValue)

    if (defaultOptionObject) {
      return defaultOptionObject
    }

    const findOptionByValue = (
      optionValue: string,
      list: Array<OptionProps>
    ): OptionProps | undefined => {
      let i = 0

      for (; i < list.length; i++) {
        const listItem = list[i]

        if (listItem.value === optionValue) {
          return listItem
        }

        if (listItem.options instanceof Array && listItem.options.length >= 1) {
          const optionFromListItemChildren = findOptionByValue(
            optionValue,
            listItem.options
          )

          if (optionFromListItemChildren) {
            return optionFromListItemChildren
          }
        }
      }
    }

    return findOptionByValue(defaultValue, data)
  }

  const selectFieldContainerClickHandler: React.MouseEventHandler = event => {
    if (typing) {
      return
    }

    const listData = listDataStack[-1 + listDataStack.length]

    if (listData.length < 1 && !opened) {
      return
    }

    setOpened(!opened)

    if (selectFieldContainerRef.current) {
      selectFieldContainerRef.current.tabIndex = Math.random()
      selectFieldContainerRef.current.focus()
    }

    const marginSize = 20
    const selectFieldElement = event.target as HTMLElement
    const selectFieldElementHeight = selectFieldElement.offsetHeight
    const listWrapperElementMaxHeight =
      window.innerHeight * 0.7 -
      (event.clientY - (marginSize + selectFieldElementHeight))

    setListHeight(listWrapperElementMaxHeight)
  }

  const selectFieldContainerBlurHandler = () => {
    if (typing) {
      return
    }

    if (closeOnSelectFieldContainerBlur) {
      return setOpened(false)
    }

    if (opened && selectFieldContainerRef.current) {
      selectFieldContainerRef.current.focus()
    }
  }

  const listWrapperMouseEnterHandler = () => {
    setCloseOnSelectFieldContainerBlur(false)
  }

  const listWrapperMouseLeaveHandler = () => {
    setCloseOnSelectFieldContainerBlur(true)
  }

  const optionOpenHandler: SelectEventHandler = ({ options }) => {
    if (!(options instanceof Array && options.length >= 1)) {
      return
    }

    setListDataStack([...listDataStack, options])
  }

  const resetState = () => {
    setOpened(false)
    setQuery('')
    setTyping(false)
  }

  const optionSelectHandler: SelectEventHandler = option => {
    setSelectedOption(option)

    resetState()
  }

  const listBackButtonClickHandler = () => {
    setListDataStack(listDataStack.slice(0, -1))
  }

  const filterInputBlurHandler = () => {
    if (closeOnSelectFieldContainerBlur) {
      resetState()
    }
  }

  const filterInputChangeHandler: React.ChangeEventHandler = event => {
    const inputElement = event.target as HTMLInputElement

    setQuery(inputElement.value)
  }

  const selectFieldContainerKeyDownHandler: React.KeyboardEventHandler =
    event => {
      if (event.key.length < 2) {
        setTyping(true)
      }

      if (event.key.toLowerCase() === 'escape') {
        resetState()
      }
    }

  const resolveFieldLabel = (): string => {
    if (selectedOption) {
      return selectedOption.label
    }

    if (defaultOption) {
      return defaultOption.label
    }

    return typeof props.label === 'string' && /\S/.test(props.label)
      ? props.label
      : 'Selecionar'
  }

  const resolveFieldValue = (): string => {
    if (selectedOption) {
      return selectedOption.value
    }

    if (defaultOption) {
      return defaultOption.value
    }

    return ''
  }

  const listDataFilter = (listData: OptionProps): boolean => {
    if (!noEmpty(query)) {
      return true
    }

    return strMatches(listData.label, query)
  }

  const listData = listDataStack[-1 + listDataStack.length]

  const filteredListData = listData.filter(listDataFilter)

  return (
    <Container>
      <input
        {...props}
        value={resolveFieldValue()}
        type="hidden"
        onChange={() => {}}
      />
      <SelectFieldContainer
        $highlightOnMouseIn={!opened}
        ref={selectFieldContainerRef}
        onKeyDown={selectFieldContainerKeyDownHandler}
        onBlur={selectFieldContainerBlurHandler}
        onClick={selectFieldContainerClickHandler}
        className={cn(
          'bg-zinc-50 border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600',
          !opened
            ? ' hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-700 dark:active:bg-zinc-600'
            : ''
        )}
      >
        <Body>
          <LabelContainer>
            <LabelWrapper className="dark:text-zinc-50">
              {(typing && (
                <FilterInput
                  value={query}
                  onBlur={filterInputBlurHandler}
                  onChange={filterInputChangeHandler}
                  ref={inputElement => inputElement?.focus()}
                  className="dark:text-zinc-50"
                />
              )) || <Label>{resolveFieldLabel()}</Label>}
            </LabelWrapper>
            <IconWrapper>
              <Icon />
            </IconWrapper>
          </LabelContainer>
        </Body>
      </SelectFieldContainer>
      {opened && (
        <ListWrapper
          onMouseEnter={listWrapperMouseEnterHandler}
          onMouseLeave={listWrapperMouseLeaveHandler}
          className="bg-zinc-50 border-zinc-400 dark:bg-zinc-800 dark:border-zinc-600"
        >
          <List $maxHeight={listHeight}>
            {listDataStack.length >= 2 && (
              <ListBackButtonWrapper>
                <ListBackButton
                  onClick={listBackButtonClickHandler}
                  className="hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600 dark:text-zinc-100"
                >
                  <i>
                    <FaAngleLeft />
                  </i>
                  <div>
                    <span>Voltar</span>
                  </div>
                </ListBackButton>
              </ListBackButtonWrapper>
            )}
            {filteredListData.map((option, optionIndex) => (
              <Option
                {...option}
                key={optionIndex}
                onSelect={optionSelectHandler}
                onOpen={optionOpenHandler}
              />
            ))}

            {filteredListData.length < 1 && (
              <EmptyListItem>
                <p>Sem registros a apresentar</p>
              </EmptyListItem>
            )}
          </List>
        </ListWrapper>
      )}
    </Container>
  )
}
