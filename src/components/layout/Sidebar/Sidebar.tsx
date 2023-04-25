import { NavLink } from "react-router-dom"

import styles from "./Sidebar.module.css"

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink to="/">
              <h3>Home</h3>
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
      </nav>
    </aside>
  )
}

export default Sidebar
