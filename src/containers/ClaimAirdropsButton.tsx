import { ReactNode } from "react"
import { MsgExecuteContract } from "@terra-money/terra.js"
import useChain from "../data/useChain"
import useConnectedAddress from "../hooks/useConnectedAddress"
import Post from "./Post"

interface Props {
  airdrops: Airdrop[]
  renderSubmit: (submit: () => Promise<void>) => ReactNode
}

const ClaimAirdropsButton = ({ airdrops, ...rest }: Props) => {
  const address = useConnectedAddress()
  const { contract } = useChain()

  const msgs = airdrops.map(
    ({ amount, stage, proof }) =>
      new MsgExecuteContract(address, contract, {
        claim: { amount, stage, proof: JSON.parse(proof) },
      })
  )

  return <Post txOptions={{ msgs }} {...rest} />
}

export default ClaimAirdropsButton
