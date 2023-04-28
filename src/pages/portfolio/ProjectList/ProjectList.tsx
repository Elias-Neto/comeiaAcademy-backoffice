import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import styles from "./ProjectList.module.css"

import {
  Project,
  getProjects,
  deleteProject,
} from "../../../services/ServiceProject"

const ProjectList: React.FC = () => {
  const navigate = useNavigate()

  const [projects, setProjects] = useState<Project[]>([])

  const fetchProjects = async () => {
    try {
      const projects = await getProjects()
      setProjects(projects)
    } catch (error) {
      console.log("Erro ao buscar projetos", error)
    }
  }

  const handleEdit = (project: Project) => {
    navigate("/portfolio/cadastro", { state: project })
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteProject(id)
      setProjects(projects.filter((project) => project.id !== id))
      alert("Projeto deletado com sucesso!")
    } catch (error) {
      console.log("Erro ao deletar projeto", error)
      alert("Ocorreu um erro ao deletar projeto")
    }
  }

  useEffect(() => {
    fetchProjects()
  })

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
        {projects.map((project) => (
          <tr key={project.id}>
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
              <button onClick={() => handleEdit(project)}>Editar</button>
              <button onClick={() => handleDelete(project.id)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProjectList
