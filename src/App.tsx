import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Layout } from "./components/layout"
import { ProjectList } from "./pages/ProjectList"
import { RegisterExperience } from "./pages/RegisterExperience"
import { RegisterInformation } from "./pages/RegisterInformation"

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
          <Route path="portfolio/listagem" element={<ProjectList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
