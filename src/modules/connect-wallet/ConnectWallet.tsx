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
    const { ethereum } = window;
    const isMetaMaskInstalled = ethereum && ethereum.isMetaMask;

    if (!isMetaMaskInstalled) {
      console.log('Need to install MetaMask');
      //todo show pop up
      setErrorMessage('Please install MetaMask browser extension to interact');
      return
    }

    if (ethereum && !defaultAccount) {
      const web3 = new ethers.providers.Web3Provider(ethereum)
      // set ethers provider
      setProvider(web3);

      try {
        const account = await ethereum.request({ method: 'eth_requestAccounts' })
        // const networkId = await ethereum.request({ method: "net_version" });

        setDefaultAccount(account[0])

        ethereum.on("accountsChanged", (accounts: any) => {
          setDefaultAccount(accounts[0])
        });

        ethereum.on("chainChanged", () => {
          window.location.reload();
        });
      }
      catch (error: any) {
        setErrorMessage(error.message);
      }
    }
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