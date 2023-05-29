// React Imports
import { ReactNode } from "react"

// Styles Imports
import styles from "./Table.module.css"

// Components Imports
import { Button } from "../Button"

export interface Column<T> {
  header: string
  accessor: keyof T
}

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  onEdit?: (item: T) => void
  onDelete?: (id: number) => Promise<void>
}

export const Table = <T extends { id: number },>({ columns, data, onEdit, onDelete }: TableProps<T>): JSX.Element => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
          {(onEdit || onDelete) && <th>Ações</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column, index) => (
              column.accessor === "image" ?
                <td key={index}>
                  <img src={item[column.accessor] as string} alt="Imagem" />
                </td>
                :
                <td key={index}>
                  {item[column.accessor] as ReactNode}
                </td>
            ))}
            {(onEdit || onDelete) && (
              <td className={styles.actions}>
                {/* {onEdit && <button type="button" onClick={() => onEdit(item)}>Editar</button>} */}
                {onEdit && <Button title="Editar" type="button" onClick={() => onEdit(item)} />}
                {/* {onDelete && <button type="button" onClick={() => onDelete(item.id)}>Excluir</button>} */}
                {onDelete && <Button title="Excluir" type="button" onClick={() => onDelete(item.id)} isRed />}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}