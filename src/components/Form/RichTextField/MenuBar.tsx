import { ChainedCommands, Editor } from '@tiptap/react'

import { Fragment } from 'react'
import { FontAwesome6IconName } from '~/Types/react-icons'
import { range } from '~/utils'
import { Button } from './Button'
import { useRichTextFieldContext } from './hooks'
import {
  EditorHeadingVariant,
  EditorHeadingVariantsList,
  EditorMenuContainer,
  EditorMenuList,
  EditorMenuListItem,
  FixedEditorMenuContainer,
  FontSizeInput,
  SelectedTextHighlightColor,
  Separator
} from './styles'
import { TableRowsButtonsMap } from './TableRowsButtonsMap'

type MenuBarProps = {
  editor: Editor | null
}

type TextAlign = 'center' | 'left' | 'right' | 'justify'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type ListTypesMap = {
  [key: string]: FontAwesome6IconName
}

type MapArrayRev = {
  [key: number]: number
}

type MenuBarComponent = React.FunctionComponent<MenuBarProps>

export const MenuBar: MenuBarComponent = ({ editor }) => {
  // Undo Redo | Heading Font-family | (-)Font-Size(+) | Bold Italic Undeline Color Highlight | link BlockQuote Image | Text-Aligns Check-List Lists Table Ellipsis
  const { toggleFixed, fixed } = useRichTextFieldContext()

  const toggleMaximizeButtonClickHandler = () => {
    toggleFixed()
  }

  const toggleTextAlign = (chain: ChainedCommands, textAlign: TextAlign) => {
    if (!editor) {
      return
    }

    const isTextAlignStyleActive = editor.isActive({ textAlign })

    if (isTextAlignStyleActive) {
      return chain.unsetTextAlign()
    }

    return chain.focus().setTextAlign(textAlign)
  }

  const isTextAligned = (textAlign: TextAlign): boolean => {
    return Boolean(editor?.isActive({ textAlign }))
  }

  const activeClass = (property: any) => {
    if (!editor) {
      return undefined
    }

    return editor.isActive(property) ? 'x-active' : undefined
  }

  const getFontSize = () => {
    if (!editor) {
      return 0
    }

    return 0
  }

  const resolveSelectedTextAlignIcon = (): FontAwesome6IconName => {
    const textAligns: Array<string> = ['Left', 'Right', 'Center', 'Justify']

    for (const textAlign of textAligns) {
      if (isTextAligned(textAlign.toLocaleLowerCase() as TextAlign)) {
        return `FaAlign${textAlign}` as FontAwesome6IconName
      }
    }

    return 'FaAlignLeft'
  }

  const resolveSelectedListIcon = (): FontAwesome6IconName => {
    const listTypesMap: ListTypesMap = {
      task: 'FaListCheck',
      bullet: 'FaListUl',
      ordered: 'FaListOl'
    }

    for (const key in listTypesMap) {
      if (activeClass(`${key}List`)) {
        return listTypesMap[key]
      }
    }

    return 'FaListCheck'
  }

  const fontSizeInputChangeHandler: React.ChangeEventHandler = event => {
    const inputElement = event.target as HTMLInputElement
    const inputElementValue = Number(inputElement.value.trim())

    if (editor) {
      editor.chain().setFontSize(`${inputElementValue}pt`)
    }
  }

  const mapArrayRev = (arr: Array<number>): MapArrayRev => {
    const map: MapArrayRev = {}

    let i = 1

    for (; i <= arr.length; i++) {
      const itemMatchValueIndex = i === 0 ? -1 + arr.length : -1 * i
      const itemMatchValue = arr.slice(itemMatchValueIndex)
      map[i] = itemMatchValue.length >= 1 ? itemMatchValue[0] : -1
    }

    return map
  }

  const applyHeading = (size: HeadingLevel = 6) => {
    if (!editor) {
      return
    }

    editor.chain().focus().toggleHeading({ level: size }).run()
  }

  const headingActiveClass = (level: number) => {
    if (!editor) {
      return undefined
    }

    return editor.isActive('heading', { level }) ? 'x-active' : undefined
  }

  const resolveSelectedHeadingLabel = () => {
    let i = 1

    for (; i < 7; i++) {
      const level = headingsListMap[i]
      if (editor?.isActive('heading', { level })) {
        return `Título ${level}`
      }
    }

    return 'Texto normal'
  }

  const addImageButtonClickHandler = (chain: ChainedCommands) => {
    const imageUrl = prompt('Insira a url da imagem')

    return chain.focus().setImage({
      src: String(imageUrl)
    })
  }

  const headingsListMap = mapArrayRev(range(6))

  // const focus = () => editor?.chain().focus()

  const EditorMenuContainerElement = fixed
    ? FixedEditorMenuContainer
    : EditorMenuContainer

  const TextFormattingButtonsWrapper = fixed
    ? (props: React.PropsWithChildren) => {
        const children =
          props.children instanceof Array ? props.children : [props.children]

        return (
          <Fragment>
            {children
              // .filter(child => Boolean(child))
              .map((child, childIndex) => (
                <EditorMenuListItem key={childIndex}>
                  {child}
                </EditorMenuListItem>
              ))}
          </Fragment>
        )
      }
    : (props: React.PropsWithChildren) => (
        <EditorMenuListItem>
          <Button icon="FaT" title="Formatar texto" dropdown>
            {props.children}
          </Button>
        </EditorMenuListItem>
      )

  return (
    <EditorMenuContainerElement>
      <EditorMenuList>
        <EditorMenuListItem>
          <Button
            icon="FaArrowRotateLeft"
            disabled={!editor?.can().undo()}
            onClick={chain => chain.undo()}
          />
        </EditorMenuListItem>
        <EditorMenuListItem>
          <Button
            icon="FaArrowRotateRight"
            disabled={!editor?.can().redo()}
            onClick={chain => chain.redo()}
          />
        </EditorMenuListItem>
        <EditorMenuListItem>
          <Separator />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Button
            icon="FaCompress"
            onClick={toggleMaximizeButtonClickHandler}
          />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Separator />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Button
            icon="FaHeading"
            style={{ width: '128px' }}
            label={resolveSelectedHeadingLabel()}
            dropdown={true}
          >
            <EditorHeadingVariantsList>
              {range(6)
                .reverse()
                .map(size => (
                  <EditorHeadingVariant
                    key={size}
                    $size={size}
                    onClick={() =>
                      applyHeading(
                        Number(headingsListMap[size]) as HeadingLevel
                      )
                    }
                    className={headingActiveClass(headingsListMap[size])}
                  >
                    <span>Título {headingsListMap[size]}</span>
                  </EditorHeadingVariant>
                ))}
            </EditorHeadingVariantsList>
          </Button>
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Separator />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Button icon="FaMinus" />
        </EditorMenuListItem>
        <EditorMenuListItem>
          <FontSizeInput
            value={getFontSize()}
            onChange={fontSizeInputChangeHandler}
          />
        </EditorMenuListItem>
        <EditorMenuListItem>
          <Button icon="FaPlus" />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Separator />
        </EditorMenuListItem>

        <TextFormattingButtonsWrapper>
          <Button
            icon="FaBold"
            title="Formatar texto em negrito"
            onClick={chain => chain.toggleBold().focus()}
            className={activeClass('bold')}
          />
          <Button
            icon="FaItalic"
            title="Formatar texto em itálico"
            onClick={chain => chain.toggleItalic().focus()}
            className={activeClass('italic')}
          />
          <Button
            icon="FaUnderline"
            title="Sublinhar texto"
            onClick={chain => chain.focus().toggleUnderline()}
            className={activeClass('underline')}
          />
          <Button
            icon="FaStrikethrough"
            title="Borrar texto"
            onClick={chain => chain.toggleStrike().focus()}
            className={activeClass('strike')}
          />
        </TextFormattingButtonsWrapper>

        <EditorMenuListItem>
          <Button
            icon="FaA"
            title="Cor do texto"
            dropdown={true}
            dropdownStyle="standard"
            dropdownWidth={150}
          >
            <div>Selecionar tipo de cor</div>
          </Button>
          <SelectedTextHighlightColor $color="#daa540" />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Separator />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Button icon="FaRegSquarePlus" dropdown>
            <Button
              icon="FaQuoteLeft"
              title="Inserir uma citação"
              onClick={chain => chain.focus().toggleBlockquote()}
              className={activeClass('blockquote')}
            />
            <Button
              icon="FaCode"
              title="Inserir bloco de texto"
              onClick={chain => chain.focus().toggleCodeBlock()}
              className={activeClass('codeBlock')}
            />
            <Button icon="FaLink" title="Inserir link" />
            <Button icon="FaVideo" title="Inserir vídeo" />
          </Button>
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Button
            icon="FaRegFileImage"
            title="Inserir imagem"
            onClick={addImageButtonClickHandler}
          />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Separator />
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Button
            icon={resolveSelectedTextAlignIcon()}
            dropdown={true}
            dropdownWidth={200}
          >
            <Button
              icon="FaAlignLeft"
              title="Alinhar texto a esquerda"
              onClick={chain => toggleTextAlign(chain, 'left')}
              className={activeClass({ textAlign: 'left' })}
            />
            <Button
              icon="FaAlignCenter"
              title="Alinhar texto ao centro"
              onClick={chain => toggleTextAlign(chain, 'center')}
              className={activeClass({ textAlign: 'center' })}
            />
            <Button
              icon="FaAlignRight"
              title="Alinhar texto a direita"
              onClick={chain => toggleTextAlign(chain, 'right')}
              className={activeClass({ textAlign: 'right' })}
            />
            <Button
              icon="FaAlignJustify"
              title="Justificar texto"
              onClick={chain => toggleTextAlign(chain, 'justify')}
              className={activeClass({ textAlign: 'justify' })}
            />
          </Button>
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Button icon={resolveSelectedListIcon()} dropdown={true}>
            <Button
              icon="FaListCheck"
              onClick={chain => chain.focus().toggleTaskList()}
              className={activeClass('taskList')}
            />
            <Button
              icon="FaListUl"
              onClick={chain => chain.focus().toggleBulletList()}
              className={activeClass('bulletList')}
            />
            <Button
              icon="FaListOl"
              onClick={chain => chain.focus().toggleOrderedList()}
              className={activeClass('orderedList')}
            />
          </Button>
        </EditorMenuListItem>

        <EditorMenuListItem>
          <Button icon="FaTable" dropdown>
            <TableRowsButtonsMap />
          </Button>
        </EditorMenuListItem>
      </EditorMenuList>
    </EditorMenuContainerElement>
  )
}
