import classNames from "classnames"
import useAirdrops from "../data/useAirdrops"
import Card, { CardFooter, CardMain } from "../components/Card"
import Details from "../components/Details"
import Button from "../components/Button"
import ClaimAll from "./ClaimAll"
import AirdropList from "./AirdropList"
import ClaimAirdropsButton from "./ClaimAirdropsButton"
import styles from "./Airdrop.module.scss"

const Airdrop = () => {
  const { data: airdrops, isLoading, error } = useAirdrops()

  return error ? (
    <p className={classNames(styles.alert, styles.red)}>Error</p>
  ) : isLoading ? (
    <p className={classNames(styles.alert, styles.text)}>Loading...</p>
  ) : !airdrops?.length ? (
    <p className={classNames(styles.alert, styles.red)}>Airdrop not found</p>
  ) : (
    <>
      <Card>
        <CardMain>
          <ClaimAll airdrops={airdrops} />
        </CardMain>

        {airdrops.length > 1 && (
          <CardFooter>
            <Details>
              <AirdropList airdrops={airdrops} />
            </Details>
          </CardFooter>
        )}
      </Card>

      <footer className={styles.footer}>
        <ClaimAirdropsButton
          airdrops={airdrops}
          renderSubmit={(submit) => <Button onClick={submit}>Claim</Button>}
        />
      </footer>
    </>
  )
}

export default Airdrop
