import { useWallet } from "@terra-money/wallet-provider"
import { FC } from "react"
import { FINDER } from "../constants"

interface Props {
  network?: string
  value?: string

  /* path */
  block?: boolean
  tx?: boolean
  address?: boolean
}

const FinderLink: FC<Props> = ({ block, tx, address, children, ...props }) => {
  const { network } = useWallet()
  const path = block ? "block" : tx ? "tx" : "address"
  const value = props.value ?? children
  const link = [FINDER, props.network ?? network.name, path, value].join("/")

  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default FinderLink
