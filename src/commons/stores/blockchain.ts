import type { CONFIG } from 'local-types'

import { ethers } from "ethers";

class BlockChain {
  public config: CONFIG | null = null

  public berzerkContract = null

  public setContract(contract: any) {
    this.berzerkContract = contract
  }

  public get ethereum() {
    const { ethereum } = window;
    return ethereum
  }

  public setConfig(config: CONFIG) {
    this.config = config
  }

  public getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    return config
  }

  public abi: any

  public setAbi = async (abi: any) => {
    this.abi = abi
  }

  public getAbi = async () => {
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    return abi
  }

  public provider: any

  // set ethers provider
  public setProvider(provider: any) {
    this.provider = provider
  }

  public defaultAccount: any

  public setDefaultAccount(account: any) {
    this.defaultAccount = account
  }

  public fetchAccounts = async () => {
    const account = await this.ethereum.request({ method: 'eth_requestAccounts' })
    return account
  }

  public setListeners() {
    this.ethereum.on("accountsChanged", (accounts: any) => {
      this.setDefaultAccount(accounts[0])
    });

    this.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
  }

  public connectWallet = async () => {
    const isMetaMaskInstalled = this.ethereum && this.ethereum.isMetaMask;

    if (!isMetaMaskInstalled) {
      // call alert store and set message
      console.log('Need to install MetaMask');
      //todo show pop up
      // setErrorMessage('Please install MetaMask browser extension to interact');
      return
    }

    // if account set return

    const web3 = new ethers.providers.Web3Provider(this.ethereum)
    this.setProvider(web3);

    try {
      const accounts = await this.fetchAccounts()
      this.setDefaultAccount(accounts[0])
      this.setListeners()
    }
    catch (error: any) {
      // call store method alert and set message
    }
  }

  public setupContract = async () => {
    // handle error and popup
    if (!this.defaultAccount) return
    if (!this.abi) return
    if (!this.provider) return

    const berzerkContract = new ethers.Contract(this.defaultAccount, this.abi, this.provider)
    this.setContract(berzerkContract)

    // if (networkId == CONFIG.NETWORK.ID) {
    //   // Add listeners start
    //   // Add listeners end
    // } else {
    //   dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
    // }
  }
}

export { BlockChain }