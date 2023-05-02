import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import styles from "./ProjectList.module.css"

import { Table } from "../../../components/common/Table"
import { Header } from "../../../components/common/Header"

import {
  Project,
  getProjects,
  deleteProject,
} from "../../../services/ProjectService"

const ProjectList: React.FC = () => {
  const navigate = useNavigate()

  const [projects, setProjects] = useState<Project[]>([])

  const fetchProjects = async () => {
    try {
      const projects = await getProjects()
      setProjects(projects)
    } catch (error) {
      console.log("Erro ao buscar ", error)
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
  }, [projects])

  return (
    <div className={styles.container}>
      <Header
        title="Listagem de Projetos"
        description="Listagem com todos os projetos cadastrados"
      />

      <Table
        data={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default ProjectList
