import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Login } from "./pages/Login"
import AppRoutes from "./routes/App.routes"


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
