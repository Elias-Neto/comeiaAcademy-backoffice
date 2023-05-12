// React Imports
import { useState, useEffect } from "react"

// Packages Imports
import { useNavigate } from "react-router-dom"

// Styles Imports
import styles from "./ExperienceList.module.css"

// Components Imports
import { Table, Column } from "../../../components/common/Table"
import { Header } from "../../../components/common/Header"

// Services Imports
import {
  Experience,
  deleteExperience,
  getExperiences,
} from "../../../services/ExperienceService"

const ExperienceList: React.FC = () => {
  const navigate = useNavigate()

  const [experiences, setExperiences] = useState<Experience[]>([])

  const colums: Column<Experience>[] = [
    { header: "Titúlo", accessor: "title" },
    { header: "Descrição", accessor: "description" },
    { header: "Ano de início", accessor: "startYear" },
    { header: "Ano de fim", accessor: "endYear" },
  ]

  const fetchExperiences = async () => {
    try {
      const experiences = await getExperiences()
      setExperiences(experiences)
    } catch (error) {
      console.log("Erro ao buscar experiências", error)
    }
  }

  const handleEdit = (experience: Experience): void => {
    navigate("/curriculo/experiencia/cadastro", { state: experience })
  }

  const handleDelete = async (id: number): Promise<void> => {
    try {
      await deleteExperience(id)
      setExperiences(experiences.filter((experience) => experience.id !== id))
      alert("Experiência deletada com sucesso!")
    } catch (error) {
      console.log("Erro ao deletar experiência", error)
      alert("Ocorreu um erro ao deletar experiência")
    }
  }

  useEffect(() => {
    fetchExperiences()
  }, [experiences])

  return (
    <div className={styles.container}>
      <Header
        title="Listagem de Experiências"
        description="Lista com todas experiências cadastradas"
      />

      <Table
        columns={colums}
        data={experiences}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default ExperienceList
