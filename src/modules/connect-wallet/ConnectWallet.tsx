import React from "react"

import { Button } from 'commons/theme'

interface Props {
  text?: string
  width?: number
  height?: number
}

function ConnectWallet(props: Props) {
  return <div>
    <Button width="100%" height="3rem">
      Connect Wallet
    </Button>
  </div>
}

export default ConnectWallet