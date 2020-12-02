import { FC, HTMLAttributes } from "react"
import classNames from "classnames/bind"
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

interface Props extends HTMLAttributes<HTMLButtonElement> {
  outline?: boolean
}

const Button: FC<Props> = ({ children, outline, ...attrs }) => {
  return (
    <button {...attrs} className={cx("button", { outline })}>
      {children}
    </button>
  )
}

export default Button
