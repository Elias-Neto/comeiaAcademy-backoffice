// Packages Imports
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Routes Imports
import AppRoutes from "./routes/App.routes"

// Pages Imports
import { Login } from "./pages/Login"

// Contexts Imports
import { AuthProvider } from "./contexts/AuthContext"

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
