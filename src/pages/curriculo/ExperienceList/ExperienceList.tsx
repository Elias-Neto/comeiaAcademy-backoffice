import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Table } from "../../../components/common/Table"

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
    <Table
      data={experiences}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}

export default ExperienceList
