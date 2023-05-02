import { useEffect, useState } from "react"

import styles from "./Dashboard.module.css"

import { Box } from "./Box"
import { BottomItem } from "./BottomItem"
import { DonoutGraph } from "./DonoutGraph"
import { Header } from "../../components/common/Header"

import { Experience, getAcademicExperiences, getProfessionalExperiences } from "../../services/ExperienceService"
import { Project, getProjects } from "../../services/ProjectService"

const Dashboard: React.FC = () => {
  const [academicExperiences, setAcademicExperiences] = useState<Experience[]>([])
  const [professionalExperiences, setProfessionalExperiences] = useState<Experience[]>([])
  const [projects, setProjects] = useState<Project[]>([])

  const fetchAcademicExperiences = async () => {
    try {
      const response = await getAcademicExperiences()
      setAcademicExperiences(response)
    } catch (error) {
      console.log("Erro ao buscar dados de experiências acadêmicas", error)
    }
  }

  const fetchProjects = async () => {
    try {
      const response = await getProjects()
      setProjects(response)
    } catch (error) {
      console.log("Erro ao buscar dados de projetos", error)
    }
  }

  const fetchProfessionalExperiences = async () => {
    try {
      const response = await getProfessionalExperiences()
      setProfessionalExperiences(response)
    } catch (error) {
      console.log("Erro ao buscar dados de experiências profissionais", error)
    }
  }

  const academicExperiencesCount = academicExperiences.length
  const academicExperiencesPercentage = ((academicExperiencesCount / 10) * 100).toFixed(0)

  const projectsCount = projects.length
  const projectsPercentage = ((projectsCount / 10) * 100).toFixed(0)

  const professionalExperiencesCount = professionalExperiences.length
  const professionalExperiencesPercentage = ((professionalExperiencesCount / 10) * 100).toFixed(0)

  useEffect(() => {
    fetchAcademicExperiences()
    fetchProjects()
    fetchProfessionalExperiences()
  }, [])

  return (
    <div className={styles.container}>
      <Header
        title="Dashboard"
        description="Gráficos sobre os dados do site"
      />

      <div className={styles.boxsWrapper}>
        <Box title="Experiências Acadêmicas">
          <div className={styles.middle}>
            <DonoutGraph percentage={academicExperiencesPercentage.toString()} color1="#4265ff" color2="#42ffc6" />

            <div className={styles.content}>
              <h3>{academicExperiencesPercentage.toString()}%</h3>
              <p>alcançada</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <BottomItem title="Esperado" value="10" />
            <BottomItem title="Alcançado" value={academicExperiencesCount.toString()} bgColor="linear-gradient(121.94deg,#4265ff 15.98%,#42ffc6 82.85%)" />
          </div>
        </Box>

        <Box title="Projetos Concluídos">
          <div className={styles.middle}>
            <DonoutGraph percentage={projectsPercentage.toString()} color1="#ff3d67" color2="#ff9a44"
            />

            <div className={styles.content}>
              <h3>{projectsPercentage.toString()}%</h3>
              <p>alcançada</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <BottomItem title="Esperado" value="10" />
            <BottomItem title="Alcançado" value={projectsCount.toString()} bgColor="linear-gradient(121.94deg,#ff3d67 15.98%,#ff9a44 82.85%)" />
          </div>
        </Box>

        <Box title="Experiências Profissionais">
          <div className={styles.middle}>
            <DonoutGraph percentage={professionalExperiencesPercentage.toString()} color1="#42d3ff" color2="#c842ff" />

            <div className={styles.content}>
              <h3>{professionalExperiencesPercentage.toString()}%</h3>
              <p>alcançada</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <BottomItem title="Esperado" value="3" />
            <BottomItem title="Alcançado" value={professionalExperiencesCount.toString()} bgColor="linear-gradient(121.94deg,#42d3ff 15.98%,#c842ff 82.85%)" />
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Dashboard
