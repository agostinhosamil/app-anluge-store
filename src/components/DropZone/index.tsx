import ReactDropZone, {
  DropzoneProps as ReactDropZoneProps
} from 'react-dropzone'
import { FaEye, FaPlus, FaTrash } from 'react-icons/fa6'

import { useState } from 'react'
import {
  DropZoneBody,
  DropZoneContainer,
  DropZoneElement,
  DropZoneFilePreview,
  DropZoneFooter
} from './styles'

type DropZoneProps = {
  height?: number
  onChange?: (selectedFile: File) => void
}

type DropZoneComponent = React.FunctionComponent<
  ReactDropZoneProps & DropZoneProps
>

export const DropZone: DropZoneComponent = ({ ...props }) => {
  const [file, setFile] = useState<File | null>(null)
  const [dropError, setDropError] = useState<boolean>(false)

  const reactDropZoneDropHandler = (files: Array<File>) => {
    // console.log('reactDropZoneDropHandler >>> ', files)

    if (files.length >= 1) {
      setFile(files[0])

      if (typeof props.onChange === 'function') {
        props.onChange(files[0])
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
    setFile(null)
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
              {file && <DropZoneFilePreview $src={URL.createObjectURL(file)} />}
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
      {file && (
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
