import { Routes, Route, useNavigate } from "react-router-dom";

import { Layout } from "../components/layout";

import { Dashboard } from "../pages/Dashboard"
import { ProjectList } from "../pages/portfolio/ProjectList"
import { ExperienceList } from "../pages/curriculo/ExperienceList"
import { RegisterProject } from "../pages/portfolio/RegisterProject"
import { RegisterExperience } from "../pages/curriculo/RegisterExperience"
import { RegisterInformation } from "../pages/curriculo/RegisterInformation"

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
        <Route path="/portfolio/listagem" element={<ProjectList />} />
        <Route path="/portfolio/cadastro" element={<RegisterProject />} />
        <Route path="/curriculo/experiancia/listagem" element={<ExperienceList />} />
        <Route path="/curriculo/experiencia/cadastro" element={<RegisterExperience />} />
        <Route path="/curriculo/informacoes/cadastro" element={<RegisterInformation />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes