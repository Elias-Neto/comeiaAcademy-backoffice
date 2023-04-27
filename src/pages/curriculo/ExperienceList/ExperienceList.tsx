import { useState } from "react"

import styles from "./ExperienceList.module.css"

interface Experience {
  title: string
  description: string
  type: string
  startDate: string
  endDate: string
}

const ExperienceList: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      title: "Software Engineer at ComeiaLabs",
      description: "Descrição",
      type: "profissional",
      startDate: "September 2022",
      endDate: "Present",
    },
    {
      title: "Analysis and Systems Developer at Nova Roma",
      description: "Descrição",
      type: "academica",
      startDate: "January 2021",
      endDate: "Present",
    },
  ])

  const handleDelete = (index: number) => {}
  const handleEdit = (index: number) => {}

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Início</th>
          <th>Fim</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {experiences.map((experience, index) => (
          <tr key={index}>
            <td>{experience.title}</td>
            <td>{experience.description}</td>
            <td>{experience.type}</td>
            <td>{experience.startDate}</td>
            <td>{experience.endDate}</td>
            <td>
              <button onClick={() => handleEdit(index)}>Editar</button>
              <button onClick={() => handleDelete(index)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ExperienceList
