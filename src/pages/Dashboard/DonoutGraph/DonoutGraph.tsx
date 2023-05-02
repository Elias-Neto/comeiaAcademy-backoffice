import styles from "./DonoutGraph.module.css"

interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {
  style?: React.CSSProperties & { "--percentage"?: string };
}

interface DonoutGraphProps {
  percentage: string
  color1: string
  color2: string
}

const DonoutGraph: React.FC<DonoutGraphProps> = ({ percentage, color1, color2 }) => {
  return (
    <>
      <svg viewBox="0 0 232 232" style={{ "--percentage": percentage } as CustomSVGProps["style"]} className={styles.svg}>
        <circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#D9D9D9" />
        <circle
          cx="50%"
          cy="50%"
          r="98.5"
          stroke={`url(#paint0_linear_${color1}_${color2})`}
        />
        <defs>
          <linearGradient
            id={`paint0_linear_${color1}_${color2}`}
            x1="-9"
            y1="82"
            x2="145"
            y2="178"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={color1} />
            <stop offset="1" stopColor={color2} />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default DonoutGraph