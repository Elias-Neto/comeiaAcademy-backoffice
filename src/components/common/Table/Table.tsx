// React Imports
import { ReactNode } from "react"

// Styles Imports
import styles from "./Table.module.css"

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
              <td>
                {onEdit && <button type="button" onClick={() => onEdit(item)}>Editar</button>}
                {onDelete && <button type="button" onClick={() => onDelete(item.id)}>Excluir</button>}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}