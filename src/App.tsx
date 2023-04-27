import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Layout } from "./components/layout"
import { ProjectList } from "./pages/portfolio/ProjectList"
import { ExperienceList } from "./pages/curriculo/ExperienceList"
import { RegisterProject } from "./pages/portfolio/RegisterProject"
import { RegisterExperience } from "./pages/curriculo/RegisterExperience"
import { RegisterInformation } from "./pages/curriculo/RegisterInformation"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/curriculo/informacoes/cadastro"
            element={<RegisterInformation />}
          />
          <Route
            path="/curriculo/experiencia/cadastro"
            element={<RegisterExperience />}
          />
          <Route
            path="/curriculo/experiancia/listagem"
            element={<ExperienceList />}
          />
          <Route path="portfolio/cadastro" element={<RegisterProject />} />
          <Route path="portfolio/listagem" element={<ProjectList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
