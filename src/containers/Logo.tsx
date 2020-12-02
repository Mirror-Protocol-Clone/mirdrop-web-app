import { ReactComponent as Image } from "./Image.svg"
import styles from "./Image.module.scss"

const Logo = () => {
  return <Image className={styles.image} width={95} height={120} />
}

export default Logo
