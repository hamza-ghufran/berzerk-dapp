import type { Contract } from 'ethers'

import type { CONFIG } from 'local-types'

import { ethers } from "ethers";
import { action, makeObservable, observable } from 'mobx';

import RootStore from './root';

class BlockChainStore {
  private rootStore: RootStore;

  @observable
  public contract: Contract | null = null

  @action.bound
  public setContract(contract: Contract) {
    this.contract = contract
  }

  public get ethereum() {
    const { ethereum } = window;
    return ethereum
  }

  @observable
  public config: CONFIG | null = null

  @action.bound
  public setConfig(config: CONFIG) {
    this.config = config
  }

  @action.bound
  public getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    this.setConfig(config)
    return config
  }

  @observable
  public abi: any

  @action.bound
  public setAbi = async (abi: any) => {
    this.abi = abi.abi
  }

  @action.bound
  public getAbi = async () => {
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    this.setAbi(abi)
    return abi
  }

  public provider: any

  // set ethers provider
  public setProvider(provider: any) {
    this.provider = provider
  }

  @observable
  public defaultAccount: any = null

  @action.bound
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

  @action.bound
  public getProvider() {
    const web3 = new ethers.providers.Web3Provider(this.ethereum)
    this.setProvider(web3);
  }

  @action.bound
  public async connectWallet() {
    const isMetaMaskInstalled = this.ethereum && this.ethereum.isMetaMask;

    if (!isMetaMaskInstalled) {
      // call alert store and set message
      console.log('Need to install MetaMask');
      //todo show pop up
      // setErrorMessage('Please install MetaMask browser extension to interact');
      return
    }

    if (this.defaultAccount) return

    try {
      const accounts = await this.fetchAccounts()
      this.setDefaultAccount(accounts[0])
      this.setListeners()
    }
    catch (error: any) {
      console.log(error)
      // call store method alert and set message
    }
  }

  public setupContract = async () => {
    // handle error and popup
    if (!this.defaultAccount) return
    if (!this.abi) return
    if (!this.provider) this.getProvider()

    try {
      const berzerkContract = new ethers.Contract(this.defaultAccount, this.abi, this.provider)
      this.setContract(berzerkContract)
    }
    catch (e) {
      console.log(e)
    }

    // if (networkId == CONFIG.NETWORK.ID) {
    //   // Add listeners start
    //   // Add listeners end
    // } else {
    //   dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
    // }
  }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this)
  }

}

export { BlockChainStore }