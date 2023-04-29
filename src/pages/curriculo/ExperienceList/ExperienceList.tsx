import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Table } from "../../../components/common/Table"

import {
  Experience,
  deleteExperience,
  getExperiences,
} from "../../../services/ServiceExperience"

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
    // <table className={styles.table}>
    //   <thead>
    //     <tr>
    //       <th>Título</th>
    //       <th>Descrição</th>
    //       <th>Tipo</th>
    //       <th>Início</th>
    //       <th>Fim</th>
    //       <th>Ações</th>
    //     </tr>
    //   </thead>

    //   <tbody>
    //     {experiences.map((experience) => (
    //       <tr key={experience.id}>
    //         <td>{experience.title}</td>
    //         <td>{experience.description}</td>
    //         <td>{experience.type}</td>
    //         <td>{experience.startYear}</td>
    //         <td>{experience.endYear}</td>
    //         <td>
    //           <button onClick={() => handleEdit(experience)}>Editar</button>
    //           <button onClick={() => handleDelete(experience.id)}>
    //             Deletar
    //           </button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  )
}

export default ExperienceList
