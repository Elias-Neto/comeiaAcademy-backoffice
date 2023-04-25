import { useState } from "react"

import styles from "./ProjectList.module.css"

interface Project {
  link: string
  image: string
  title: string
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      link: "https://academy.comeialabs.com.br",
      image: "https://picsum.photos/300/200?random=1",
      title: "Projeto 1",
    },
    {
      link: "https://academy.comeialabs.com.br",
      image: "https://picsum.photos/300/200?random=2",
      title: "Projeto 2",
    },
    {
      link: "https://academy.comeialabs.com.br",
      image: "https://picsum.photos/300/200?random=3",
      title: "Projeto 3",
    },
  ])

  const handleEdit = (index: number) => {}
  const handleDelete = (index: number) => {}

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Imagem</th>
          <th>Link</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {projects.map((project, index) => {
          return (
            <tr key={index}>
              <td>{project.title}</td>
              <td>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
              </td>
              <td>
                <a href={project.link} target="_blank">
                  {project.link}
                </a>
              </td>
              <td>
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Deletar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ProjectList
