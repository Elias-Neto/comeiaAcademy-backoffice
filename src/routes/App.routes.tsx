import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/layout";

import { Home } from "../pages/Home"
import { ProjectList } from "../pages/portfolio/ProjectList"
import { ExperienceList } from "../pages/curriculo/ExperienceList"
import { RegisterProject } from "../pages/portfolio/RegisterProject"
import { RegisterExperience } from "../pages/curriculo/RegisterExperience"
import { RegisterInformation } from "../pages/curriculo/RegisterInformation"

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
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