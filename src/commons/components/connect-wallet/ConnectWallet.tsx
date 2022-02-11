import type { AppStore } from 'commons/stores';

import React from 'react'
import { inject, observer } from 'mobx-react';

import { Button } from 'commons/theme'

// todo move to better location
declare global {
  interface Window {
    ethereum: any;
  }
}

interface Props {
  store?: AppStore
  text?: string
  width?: number
  height?: number
}

function ConnectWallet(props: Props) {
  const blockchainStore = props.store!.blockchain

  const connectWalletHandler = async () => {
    await blockchainStore.connectWallet()
  }

  return (
    <Button onClick={connectWalletHandler} width="100%" height="3rem">
      Connect Wallet
    </Button>
  );
}

export default inject('store')(observer(ConnectWallet))