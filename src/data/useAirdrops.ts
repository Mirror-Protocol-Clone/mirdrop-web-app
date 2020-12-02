import { useQuery } from "react-query"
import { request } from "graphql-request"
import BigNumber from "bignumber.js"
import useConnectedAddress from "../hooks/useConnectedAddress"
import AIRDROP from "./gqldocs"
import useChain from "./useChain"

const useAirdrops = () => {
  const address = useConnectedAddress()
  const { name, graphql } = useChain()

  return useQuery(["airdrop", name, address], async () => {
    const { airdrop } = await request<{ airdrop: Airdrop[] }>(
      graphql + "?airdrop",
      AIRDROP,
      { address }
    )

    return airdrop.filter(({ amount }) => new BigNumber(amount).gt(0))
  })
}

export default useAirdrops
