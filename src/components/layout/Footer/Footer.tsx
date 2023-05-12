// Styles Imports
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Sistema Backoffice do meu site pessoal. Todos
        os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
