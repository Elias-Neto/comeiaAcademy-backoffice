import styles from "./Box.module.css"

interface BoxProps {
  title: string
  children: React.ReactNode
}

const Box: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <div className={styles.box}>
      <div className={styles.top}>{title}</div>
      {children}
    </div>
  )
}

export default Box
