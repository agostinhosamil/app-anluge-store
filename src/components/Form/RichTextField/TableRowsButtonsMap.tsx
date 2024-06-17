import { useState } from 'react'
import { FaTable } from 'react-icons/fa6'

import { noEmpty, range } from '~/utils'
import { useRichTextFieldContext } from './hooks'
import {
  TableRowsButtonsMapBody,
  TableRowsButtonsMapCol,
  TableRowsButtonsMapContainer,
  TableRowsButtonsMapFooter,
  TableRowsButtonsMapRow
} from './tableStyles'

type TableRowsButtonsMapProps = {
  title?: string
  map?: [number, number?]
}

type TableRowsButtonsMapComponent =
  React.FunctionComponent<TableRowsButtonsMapProps>

export const TableRowsButtonsMap: TableRowsButtonsMapComponent = props => {
  const [insertingTableSizes, setInsertingTableSizes] = useState<string>('')
  const [selectedMapButtons, setSelectedMapButtons] = useState<Array<string>>(
    []
  )

  const { editor } = useRichTextFieldContext()

  if (!editor) {
    return null
  }

  const insertTable = (rows: number, cols: number) => {
    if (editor) {
      editor
        .chain()
        .focus()
        .insertTable({
          rows,
          cols,
          withHeaderRow: true
        })
        .run()
    }
  }

  const activeButton = (row: number, col: number) => {
    const selectedMapButtons: Array<string> = []

    setInsertingTableSizes(`${row}x${col}`)

    for (; row > 0; row--) {
      let colIndex = col

      for (; colIndex > 0; colIndex--) {
        selectedMapButtons.push(`${row}:${colIndex}`)
      }
    }

    setSelectedMapButtons(selectedMapButtons)
  }

  const tableRowsButtonsMapBodyMouseLeaveHandler = () => {
    setSelectedMapButtons([])
    setInsertingTableSizes('')
  }

  const buttonsMap =
    props.map instanceof Array ? props.map.concat(props.map[0]) : [10, 8]

  const buttonsMapRows = parseInt(String(buttonsMap[1]))
  const buttonsMapCols = parseInt(String(buttonsMap[0]))

  const rows = !isNaN(buttonsMapRows) ? buttonsMapRows : 8
  const cols = !isNaN(buttonsMapCols) ? buttonsMapCols : 10

  return (
    <TableRowsButtonsMapContainer>
      <strong>
        {((noEmpty(props.title) && props.title) || 'Criar Tabela').concat(
          noEmpty(insertingTableSizes) ? ` ${insertingTableSizes}` : ''
        )}
      </strong>
      <TableRowsButtonsMapBody
        onMouseLeave={tableRowsButtonsMapBodyMouseLeaveHandler}
      >
        {range(rows).map(row => (
          <TableRowsButtonsMapRow key={row}>
            {range(cols).map(col => (
              <TableRowsButtonsMapCol key={col}>
                <button
                  type="button"
                  role="button"
                  className={
                    selectedMapButtons.includes(`${row}:${col}`)
                      ? 'x-selected'
                      : undefined
                  }
                  onClick={() => insertTable(row, col)}
                  onMouseOver={() => activeButton(row, col)}
                />
              </TableRowsButtonsMapCol>
            ))}
          </TableRowsButtonsMapRow>
        ))}
      </TableRowsButtonsMapBody>
      <TableRowsButtonsMapFooter>
        <button type="button">
          <i>
            <FaTable />
          </i>
          <span>Inserir table</span>
        </button>
      </TableRowsButtonsMapFooter>
    </TableRowsButtonsMapContainer>
  )
}
