import { FC, useState } from "react"
import styles from "./Details.module.scss"

const Details: FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)

  return collapsed ? (
    <button className={styles.button} onClick={() => setCollapsed(false)}>
      Show details
    </button>
  ) : (
    <>{children}</>
  )
}

export default Details
