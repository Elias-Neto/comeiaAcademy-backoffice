// React Imports
import { useEffect, useState } from "react"

// Styles Imports
import styles from "./Dashboard.module.css"

// Component Imports
import { Box } from "./Box"
import { BottomItem } from "./BottomItem"
import { DonoutGraph } from "./DonoutGraph"
import { Header } from "../../components/common/Header"

// Services Imports
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

  const calculateNumbers = (data: (Project | Experience)[]): { count: string; percentage: string } => {
    const count = (data.length).toString()
    const percentage = ((data.length / 10) * 100).toFixed(0)

    return {
      count,
      percentage
    }
  }

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
            <DonoutGraph percentage={calculateNumbers(academicExperiences).percentage} color1="#4265ff" color2="#42ffc6" />

            <div className={styles.content}>
              <h3>{calculateNumbers(academicExperiences).percentage}%</h3>
              <p>alcançada</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <BottomItem title="Esperado" value="10" />
            <BottomItem title="Alcançado" value={calculateNumbers(academicExperiences).count} bgColor="linear-gradient(121.94deg,#4265ff 15.98%,#42ffc6 82.85%)" />
          </div>
        </Box>

        <Box title="Projetos Concluídos">
          <div className={styles.middle}>
            <DonoutGraph percentage={calculateNumbers(projects).percentage} color1="#ff3d67" color2="#ff9a44"
            />

            <div className={styles.content}>
              <h3>{calculateNumbers(projects).percentage}%</h3>
              <p>alcançada</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <BottomItem title="Esperado" value="10" />
            <BottomItem title="Alcançado" value={calculateNumbers(projects).count} bgColor="linear-gradient(121.94deg,#ff3d67 15.98%,#ff9a44 82.85%)" />
          </div>
        </Box>

        <Box title="Experiências Profissionais">
          <div className={styles.middle}>
            <DonoutGraph percentage={calculateNumbers(professionalExperiences).percentage} color1="#42d3ff" color2="#c842ff" />

            <div className={styles.content}>
              <h3>{calculateNumbers(professionalExperiences).percentage}%</h3>
              <p>alcançada</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <BottomItem title="Esperado" value="10" />
            <BottomItem title="Alcançado" value={calculateNumbers(professionalExperiences).count} bgColor="linear-gradient(121.94deg,#42d3ff 15.98%,#c842ff 82.85%)" />
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Dashboard
