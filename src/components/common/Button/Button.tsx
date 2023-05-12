// Styles Imports
import styles from "./Button.module.css"

interface ButtonProps {
  title: string
  isRed?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  title,
  isRed = false,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${isRed && styles.bgRed}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
