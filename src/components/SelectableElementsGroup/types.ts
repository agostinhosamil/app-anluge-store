export type SelectedElementId = string | number

export type SelectedElement = {
  id: SelectedElementId
}

export type SelectedElements = Array<SelectedElement>

export type SelectableElementsContextDataObject = {
  selectedElements: SelectedElements

  selectElement: (elementId: SelectedElementId) => void
  selectElements: (elementsIds: Array<SelectedElementId>) => void
  deselectElement: (elementId: SelectedElementId) => void
  deselectElements: (elementsIds: Array<SelectedElementId>) => void
  isElementSelected: (elementId: SelectedElementId) => boolean
}
