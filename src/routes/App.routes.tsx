// Packages Imports
import { Routes, Route, useNavigate } from "react-router-dom";

// Components Imports
import { Layout } from "../components/layout";

// Pages Imports
import { Dashboard } from "../pages/Dashboard"
import { ProjectList } from "../pages/portfolio/ProjectList"
import { ExperienceList } from "../pages/curriculo/ExperienceList"
import { RegisterProject } from "../pages/portfolio/RegisterProject"
import { RegisterExperience } from "../pages/curriculo/RegisterExperience"
import { RegisterInformation } from "../pages/curriculo/RegisterInformation"

// Contexts Imports
import { useAuth } from "../contexts/AuthContext";

const AppRoutes: React.FC = () => {
  const { authenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!authenticated) {
    navigate("/login")
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio/listar" element={<ProjectList />} />
        <Route path="/portfolio/cadastrar" element={<RegisterProject />} />
        <Route path="/portfolio/atualizar" element={<RegisterProject />} />
        <Route path="/curriculo/experiencia/listar" element={<ExperienceList />} />
        <Route path="/curriculo/experiencia/cadastrar" element={<RegisterExperience />} />
        <Route path="/curriculo/experiencia/atualizar" element={<RegisterExperience />} />
        <Route path="/curriculo/informacoes" element={<RegisterInformation />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes