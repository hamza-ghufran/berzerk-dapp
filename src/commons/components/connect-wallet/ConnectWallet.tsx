import React, { useState, useEffect } from 'react'

import { ethers } from "ethers";

import { Button } from 'commons/theme'

// import styles from './styles.module.css'

// todo move to better location
declare global {
  interface Window {
    ethereum: any;
  }
}

interface Props {
  text?: string
  width?: number
  height?: number
  setAccount: (acct: string) => void
}

function ConnectWallet(props: Props) {
  const { setAccount } = props

  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [provider, setProvider] = useState<any>(null);

  const connectWalletHandler = async () => {
   // call store method
  }

  useEffect(() => {
    if (defaultAccount) {
      setAccount(defaultAccount)
    };
  }, [defaultAccount, setAccount]);

  return (
    <div>
      <Button onClick={connectWalletHandler} width="100%" height="3rem">
        Connect Wallet
      </Button>
      {errorMessage}
    </div>
  );
}

export default ConnectWallet;