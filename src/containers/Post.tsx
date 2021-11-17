import { FC, ReactNode, useState } from "react"
import { CreateTxOptions } from "@terra-money/terra.js"
import { useWallet } from "@terra-money/wallet-provider"
import { useGasPrice } from "../hooks/useGasPrices"
import Broadcasting from "./Broadcasting"

interface Props {
  txOptions: CreateTxOptions
  renderSubmit: (submit: () => Promise<void>) => ReactNode
}

const Post: FC<Props> = ({ txOptions, renderSubmit, children }) => {
  const [txhash, setTxhash] = useState("")
  const [error, setError] = useState<Error>()
  const { post } = useWallet()
  const gasPrice = useGasPrice("uusd")

  const submit = async () => {
    try {
      const { result } = await post({ ...txOptions, gasPrices: gasPrice })
      setTxhash(result.txhash)
    } catch (error) {
      setError(error as Error)
    }
  }

  return error ? (
    <p>{error.message}</p>
  ) : txhash ? (
    <Broadcasting txhash={txhash} />
  ) : (
    <>
      {children}
      {renderSubmit(submit)}
    </>
  )
}

export default Post
