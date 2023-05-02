import { NavLink } from "react-router-dom"

import styles from "./Sidebar.module.css"

import { useAuth } from "../../../contexts/AuthContext"

const Sidebar: React.FC = () => {
  const { logout } = useAuth()

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink to="/">
              <h3>Dashboard</h3>
            </NavLink>
          </li>
        </ul>

        <h3>Currículo</h3>

        <ul>
          <li>
            <NavLink to="/curriculo/informacoes/cadastro">
              Cadastrar Informações
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculo/experiencia/cadastro">
              Cadastrar Experiência
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculo/experiancia/listagem">
              Listagem de Experiências
            </NavLink>
          </li>
        </ul>

        <h3>Portfólio</h3>

        <ul>
          <li>
            <NavLink to="/portfolio/cadastro">Cadastrar Portfólio</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio/listagem">Listagem de Portfólio</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink onClick={logout} to="/login">
              <h3>Logout</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
