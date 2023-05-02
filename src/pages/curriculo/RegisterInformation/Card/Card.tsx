import styles from "./Card.module.css"

import { Information } from "../../../../services/InformationService"

interface CardProps {
  information: Information
}

const Card: React.FC<CardProps> = ({ information }) => {
  const { profilePic, name, office, resume } = information

  return (
    <div className={styles.card}>
      <img
        src={profilePic}
        alt={`Foto de Perfil de ${name}`}
        className={styles.profilePic}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.office}>{office}</p>
        <p className={styles.resume}>{resume}</p>
      </div>
    </div>
  )
}

export default Card
