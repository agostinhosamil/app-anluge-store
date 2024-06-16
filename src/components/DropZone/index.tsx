import ReactDropZone, {
  DropzoneProps as ReactDropZoneProps
} from 'react-dropzone'
import { FaEye, FaPlus, FaTrash } from 'react-icons/fa6'

import { useRef, useState } from 'react'
import { noEmpty } from '~/utils'
import {
  DropZoneBody,
  DropZoneContainer,
  DropZoneElement,
  DropZoneFilePreview,
  DropZoneFooter
} from './styles'

export type DropZoneChangeHandlerProps = {
  file: File
  files: Array<File>
}

export type DropZoneChangeHandler = (
  props: DropZoneChangeHandlerProps
) => void | Promise<void>

type DropZoneProps = {
  height?: number
  defaultValue?: string
  onChange?: DropZoneChangeHandler
  onDelete?: () => void
}

type DropZoneComponent = React.FunctionComponent<
  ReactDropZoneProps & DropZoneProps
>

export const DropZone: DropZoneComponent = ({ defaultValue, ...props }) => {
  const [file, setFile] = useState<File | null>(null)
  const [files, setFiles] = useState<Array<File>>([])
  const [dropError, setDropError] = useState<boolean>(false)

  const defaultValueState = useRef<string | undefined>(defaultValue)

  const reactDropZoneDropHandler = (files: Array<File>) => {
    // console.log('reactDropZoneDropHandler >>> ', files)

    if (files.length >= 1) {
      setFiles(files)
      setFile(files[0])

      if (typeof props.onChange === 'function') {
        props.onChange({ file: files[0], files })
      }
    }
  }

  const reactDropZoneDropAcceptedHandler = () => {
    setDropError(false)
  }

  const reactDropZoneDropRejectedHandler = () => {
    setDropError(true)
  }

  const deleteButtonClickHandler = () => {
    defaultValueState.current = undefined

    setFile(null)

    if (typeof props.onDelete === 'function') {
      props.onDelete()
    }
  }

  const couldShowFilePreview = (): boolean => {
    return Boolean(file instanceof File || noEmpty(defaultValueState.current))
  }

  const resolveFilePreviewUrl = (): string => {
    if (file instanceof File) {
      return URL.createObjectURL(file)
    }

    return noEmpty(defaultValueState.current) ? defaultValueState.current : ''
  }

  return (
    <DropZoneContainer>
      <ReactDropZone
        maxFiles={1}
        {...props}
        onDrop={reactDropZoneDropHandler}
        onDropAccepted={reactDropZoneDropAcceptedHandler}
        onDropRejected={reactDropZoneDropRejectedHandler}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <DropZoneElement $error={dropError}>
            <DropZoneBody $height={props.height} {...getRootProps()}>
              {/* {(file && (
                <DropZoneFilePreview $src={} />
              )) ||
                (noEmpty(defaultValue) && (
                  <DropZoneFilePreview $src={defaultValue} />
                ))} */}
              {couldShowFilePreview() && (
                <DropZoneFilePreview $src={resolveFilePreviewUrl()} />
              )}
              <input {...getInputProps()} />
              <i>
                <FaPlus />
              </i>
              <p>
                {dropError
                  ? 'Arquivo não suportado, envie uma imagem no formato JPG, PNG ou GIF'
                  : !isDragActive
                    ? 'Arraste e solte uma imagem aqui, ou clique para selecionar'
                    : 'Solte a imagem aqui'}
              </p>
            </DropZoneBody>
          </DropZoneElement>
        )}
      </ReactDropZone>
      {couldShowFilePreview() && (
        <DropZoneFooter>
          <ul>
            <li>
              <div>
                <button
                  type="button"
                  onClick={deleteButtonClickHandler}
                  title="Remover este arquivo"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
            <li>
              <div>
                <button type="button" title="Pre-visualizar este arquivo">
                  <FaEye />
                </button>
              </div>
            </li>
          </ul>
        </DropZoneFooter>
      )}
    </DropZoneContainer>
  )
}
