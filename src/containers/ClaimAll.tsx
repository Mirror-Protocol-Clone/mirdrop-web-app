import BigNumber from "bignumber.js"
import { readAmount } from "terra-utils"
import styles from "./ClaimAll.module.scss"

const ClaimAll = ({ airdrops }: { airdrops: Airdrop[] }) => {
  const amount = BigNumber.sum(...airdrops.map(({ amount }) => amount))

  return (
    <div className={styles.component}>
      <div>Amount</div>
      <div>{readAmount(amount)} MIR</div>
    </div>
  )
}

export default ClaimAll
