import styles from "./Header.module.css"

interface HeaderProps {
  title: string
  description: string
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  )
}

export default Header