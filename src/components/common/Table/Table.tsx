import styles from "./Table.module.css"

interface TableProps {
  data: {
    id: number
    title: string
    description: string
    type?: string
    startYear?: number
    endYear?: number
    demonstration?: string
    github?: string
    deploy?: string
  }[]
  onEdit: (item: any) => void
  onDelete: (id: number) => void
}

const Table: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  const hasTypeAndYears = data.every(
    (item) => item.type !== undefined && item.startYear !== undefined && item.endYear !== undefined
  )
  const hasGitHubAndDeploy = data.every(
    (item) => item.github !== undefined && item.deploy !== undefined
  )

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          {hasTypeAndYears && (
            <>
              <th>Tipo</th>
              <th>Ano de Início</th>
              <th>Ano de Fim</th>
            </>
          )}
          {hasGitHubAndDeploy && (
            <>
              <th>Demonstração</th>
              <th>GitHub</th>
              <th>Deploy</th>
            </>
          )}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            {hasTypeAndYears && (
              <>
                <td>{item.type}</td>
                <td>{item.startYear}</td>
                <td>{item.endYear}</td>
              </>
            )}
            {hasGitHubAndDeploy && (
              <>
                <td>
                  <a href={item.demonstration} target="_blank">
                    {item.demonstration}
                  </a>
                </td>
                <td>
                  <a href={item.github} target="_blank">
                    {item.github}
                  </a>
                </td>
                <td>
                  <a href={item.deploy} target="_blank">
                    {item.deploy}
                  </a>
                </td>
              </>
            )}
            <td>
              <button onClick={() => onEdit(item)}>Editar</button>
              <button onClick={() => onDelete(item.id)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
