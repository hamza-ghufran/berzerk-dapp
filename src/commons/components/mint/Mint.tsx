import type { AppStore } from "commons/stores";

import React, { useCallback } from "react";
import { observer, inject } from "mobx-react";

import { Button } from 'commons/theme'

interface Props {
  store?: AppStore
}

function Mint(props: Props) {
  const blockchainStore = props.store!.blockchain

  const mintNft = useCallback(async () => {
    await blockchainStore.mint()
    alert('MINTED')
  }, [blockchainStore])

  return <div>
    <Button onClick={() => mintNft()} width="100%" height="3rem">
      Mint
    </Button>
  </div>
}

export default inject('store')(observer(Mint))