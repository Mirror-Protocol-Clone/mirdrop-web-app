import { readAmount } from "terra-utils"
import Button from "../components/Button"
import ClaimAirdropsButton from "./ClaimAirdropsButton"
import styles from "./AirdropList.module.scss"

const AirdropList = ({ airdrops }: { airdrops: Airdrop[] }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {airdrops.map((airdrop) => {
          const { stage, amount } = airdrop

          return (
            <tr key={stage}>
              <td>{stage}</td>
              <td>{readAmount(amount)} MIR</td>
              <td className={styles.right}>
                <ClaimAirdropsButton
                  airdrops={[airdrop]}
                  renderSubmit={(submit) => (
                    <Button onClick={submit} outline>
                      Claim
                    </Button>
                  )}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default AirdropList
