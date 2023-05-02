import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import styles from "./ExperienceList.module.css"

import { Table } from "../../../components/common/Table"
import { Header } from "../../../components/common/Header"

import {
  Experience,
  deleteExperience,
  getExperiences,
} from "../../../services/ExperienceService"

const ExperienceList: React.FC = () => {
  const navigate = useNavigate()

  const [experiences, setExperiences] = useState<Experience[]>([])

  const fetchExperiences = async () => {
    try {
      const experiences = await getExperiences()
      setExperiences(experiences)
    } catch (error) {
      console.log("Erro ao buscar experiências", error)
    }
  }

  const handleEdit = (experience: Experience) => {
    navigate("/curriculo/experiencia/cadastro", { state: experience })
  }

  const handleDelete = async (id: number) => {
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
        data={experiences}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default ExperienceList
