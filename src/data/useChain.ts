import { useWallet } from "@terra-money/wallet-provider"
import api from "./api"

const useChain = () => {
  const { network } = useWallet()
  const chain = api[network.name]

  if (!chain) throw new Error(`${network.name} is not supported`)

  return { ...network, ...chain }
}

export default useChain
