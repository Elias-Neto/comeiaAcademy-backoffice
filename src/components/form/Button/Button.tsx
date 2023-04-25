import styles from "./Button.module.css"

interface ButtonProps {
  title: string
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button type="submit" className={styles.button}>
      {title}
    </button>
  )
}

export default Button
