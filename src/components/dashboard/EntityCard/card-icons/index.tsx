import { Partial } from '@components/Partial'

import { noEmpty } from '~/utils'
import { IconElement } from './IconElement'
import { IconButtonComponent } from './types'

export { Options } from './Options'

export const Remove: IconButtonComponent = props => {
  const clickHandler: React.MouseEventHandler = event => {
    event.preventDefault()

    if (typeof props.onRemove === 'function') {
      props.onRemove()
    }
  }

  const iconElement = (
    <IconElement name="FaTrash" title="Eliminar" onClick={clickHandler} />
  )

  if (noEmpty(props.entity)) {
    return <Partial can={`${props.entity}:delete`}>{iconElement}</Partial>
  }

  return iconElement
}

export const View: IconButtonComponent = props => {
  const clickHandler: React.MouseEventHandler = event => {
    event.preventDefault()

    if (typeof props.onView === 'function') {
      props.onView()
    }
  }

  return (
    <IconElement
      name="FaEye"
      title="Visualizar detalhes"
      onClick={clickHandler}
    />
  )
}

export const Edit: IconButtonComponent = props => {
  const clickHandler: React.MouseEventHandler = event => {
    event.preventDefault()

    if (typeof props.onEdit === 'function') {
      props.onEdit()
    }
  }

  const iconElement = (
    <IconElement name="FaPen" title="Editar" onClick={clickHandler} />
  )

  if (noEmpty(props.entity)) {
    return <Partial can={`${props.entity}:edit`}>{iconElement}</Partial>
  }

  return iconElement
}
