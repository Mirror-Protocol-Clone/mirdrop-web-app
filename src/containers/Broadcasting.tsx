import { useQuery } from "react-query"
import { truncate } from "terra-utils"
import useLCDClient from "../hooks/useLCDClient"
import FinderLink from "../components/FinderLink"
import Card, { CardMain } from "../components/Card"
import { ReactComponent as Success } from "./Success.svg"
import styles from "./Broadcasting.module.scss"

const Broadcasting = ({ txhash }: { txhash: string }) => {
  const lcd = useLCDClient()
  const { isLoading } = useQuery(["tx", txhash], () => lcd.tx.txInfo(txhash), {
    retry: 100,
    retryDelay: 1000,
  })

  return (
    <Card>
      <CardMain>
        <div className={styles.component}>
          <p>
            {isLoading ? (
              "Broadcasting..."
            ) : (
              <span className={styles.success}>
                <Success width={18} height={18} />
                Finished!
              </span>
            )}
          </p>

          <FinderLink value={txhash} tx>
            {truncate(txhash)}
          </FinderLink>
        </div>
      </CardMain>
    </Card>
  )
}

export default Broadcasting
