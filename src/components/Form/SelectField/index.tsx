import { useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaAngleLeft, FaAngleUp } from 'react-icons/fa6'

import { Option } from './Option'
import {
  Body,
  Container,
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
  ...props
}) => {
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

  const selectFieldContainerClickHandler: React.MouseEventHandler = event => {
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

  const optionSelectHandler: SelectEventHandler = option => {
    setSelectedOption(option)
    setOpened(false)
  }

  const listBackButtonClickHandler = () => {
    setListDataStack(listDataStack.slice(0, -1))
  }

  const resolveFieldLabel = (): string => {
    if (selectedOption) {
      return selectedOption.label
    }

    return typeof props.label === 'string' && /\S/.test(props.label)
      ? props.label
      : 'Selecionar'
  }

  const listData = listDataStack[-1 + listDataStack.length]

  return (
    <Container>
      <input
        {...props}
        value={(selectedOption && selectedOption.value) || ''}
        type="hidden"
        onChange={() => {}}
      />
      <SelectFieldContainer
        $highlightOnMouseIn={!opened}
        ref={selectFieldContainerRef}
        onBlur={selectFieldContainerBlurHandler}
        onClick={selectFieldContainerClickHandler}
      >
        <Body>
          <LabelContainer>
            <LabelWrapper>
              <Label>{resolveFieldLabel()}</Label>
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
        >
          <List $maxHeight={listHeight}>
            {listDataStack.length >= 2 && (
              <ListBackButtonWrapper>
                <ListBackButton onClick={listBackButtonClickHandler}>
                  <i>
                    <FaAngleLeft />
                  </i>
                  <div>
                    <span>Voltar</span>
                  </div>
                </ListBackButton>
              </ListBackButtonWrapper>
            )}
            {listData.map((option, optionIndex) => (
              <Option
                {...option}
                key={optionIndex}
                onSelect={optionSelectHandler}
                onOpen={optionOpenHandler}
              />
            ))}
          </List>
        </ListWrapper>
      )}
    </Container>
  )
}
