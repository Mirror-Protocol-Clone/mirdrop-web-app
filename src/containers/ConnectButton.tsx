import { truncate } from "terra-utils"
import { ConnectType, useWallet } from "@terra-money/wallet-provider"
import { useAddress } from "../hooks/useConnectedAddress"
import Card, { CardMain } from "../components/Card"
import { ReactComponent as Desktop } from "./Desktop.svg"
import { ReactComponent as Mobile } from "./Mobile.svg"
import styles from "./ConnectButton.module.scss"

const ConnectButton = () => {
  const { connect, disconnect } = useWallet()
  const address = useAddress()

  return address ? (
    <Card>
      <CardMain>
        <div className={styles.connected}>
          {truncate(address)}
          <button className={styles.disconnect} onClick={() => disconnect()}>
            Disconnect
          </button>
        </div>
      </CardMain>
    </Card>
  ) : (
    <>
      <button
        className={styles.connect}
        onClick={() => connect(ConnectType.CHROME_EXTENSION)}
      >
        Connect extension
        <Desktop width={26} height={26} />
      </button>
      <button
        className={styles.connect}
        onClick={() => connect(ConnectType.WALLETCONNECT)}
      >
        Connect mobile
        <Mobile width={26} height={26} />
      </button>
    </>
  )
}

export default ConnectButton
