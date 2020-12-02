import { useWallet, WalletStatus } from "@terra-money/wallet-provider"
import { useAddress } from "../hooks/useConnectedAddress"
import Logo from "./Logo"
import ConnectButton from "./ConnectButton"
import Airdrop from "./Airdrop"
import styles from "./App.module.scss"

const App = () => {
  const address = useAddress()
  const { status } = useWallet()

  return status === WalletStatus.INITIALIZING ? null : (
    <div className={styles.app}>
      <header className={styles.header}>
        <Logo />
        <h1 className={styles.title}>Mirror Airdrops</h1>
      </header>

      <aside>
        <ConnectButton />
      </aside>

      <main className={styles.main}>{address && <Airdrop />}</main>
    </div>
  )
}

export default App
