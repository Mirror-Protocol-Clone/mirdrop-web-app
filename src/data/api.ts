const api: Record<string, { graphql: string; contract: string }> = {
  mainnet: {
    graphql: "https://graph.mirror.finance/graphql",
    contract: "terra1kalp2knjm4cs3f59ukr4hdhuuncp648eqrgshw",
  },
  testnet: {
    graphql: "https://bombay-mirror-graph.terra.dev/graphql",
    contract: "terra1p6nvyw7vz3fgpy4nyh3q3vc09e65sr97ejxn2p",
  },
}

export default api
