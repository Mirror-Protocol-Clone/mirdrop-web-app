import { FC } from "react"
import styles from "./Card.module.scss"

export const CardMain: FC = ({ children }) => {
  return <div className={styles.main}>{children}</div>
}

export const CardFooter: FC = ({ children }) => {
  return <div className={styles.footer}>{children}</div>
}

const Card: FC = ({ children }) => {
  return <div className={styles.card}>{children}</div>
}

export default Card
