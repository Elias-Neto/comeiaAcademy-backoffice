import styles from "./BottomItem.module.css"

interface CustomCSSProperties extends React.CSSProperties {
  '--bg-color': string;
}

interface BottomItemProps {
  title: string
  value: string
  bgColor?: string
}

const BottomItem: React.FC<BottomItemProps> = ({ title, value, bgColor = "#4e4e4e" }) => {
  return (
    <div className={styles.item} style={{ '--bg-color': bgColor } as CustomCSSProperties}>
      <span>{title}</span>
      <span>{value}</span>
    </div>

  )
}

export default BottomItem