import { StrictMode } from "react"
import { render } from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { getChainOptions, WalletProvider } from "@terra-money/wallet-provider"
import { BRIDGE } from "./constants"
import "./index.scss"
import App from "./containers/App"

const queryClient = new QueryClient()

getChainOptions().then((chainOptions) => {
  render(
    <StrictMode>
      <WalletProvider {...chainOptions} connectorOpts={{ bridge: BRIDGE }}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WalletProvider>
    </StrictMode>,
    document.getElementById("root")
  )
})
