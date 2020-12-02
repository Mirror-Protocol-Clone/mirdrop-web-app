import { MsgSend } from "@terra-money/terra.js"
import Button from "../components/Button"
import useConnectedAddress from "../hooks/useConnectedAddress"
import { useGasPrice } from "../hooks/useGasPrices"
import Post from "./Post"

const SendButton = () => {
  const address = useConnectedAddress()
  const gasPrices = useGasPrice("uluna")

  if (!gasPrices) return null

  const msgs = [new MsgSend(address, address, `1uluna`)]
  const memo = "Test"

  return (
    <Post
      txOptions={{ msgs, memo, gasPrices }}
      renderSubmit={(submit) => <Button onClick={submit}>Send</Button>}
    />
  )
}

export default SendButton
