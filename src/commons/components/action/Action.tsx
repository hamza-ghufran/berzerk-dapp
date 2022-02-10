import React, { useState } from 'react'

import { ConnectWallet } from 'commons/components/connect-wallet'
import { Mint } from 'commons/components/mint'

/**
 * 
 * This should check if an account is connected
 * Based on the condition, dispkay connect
 * or dispklay mint button
 */
function Action() {
  const [account, setAccount] = useState<string | null>(null)

  return <div>
    {account ?
      <Mint></Mint>
      : <ConnectWallet setAccount={setAccount} />
    }
  </div>
}

export default Action