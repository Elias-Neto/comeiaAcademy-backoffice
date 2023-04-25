import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Layout } from "./components/layout"
import { Home } from "./pages/Home"
import { RegisterInformation } from "./pages/RegisterInformation"
import { RegisterExperience } from "./pages/RegisterExperience"

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
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
