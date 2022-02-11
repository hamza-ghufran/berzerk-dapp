import { BlockChainStore } from './blockchain';

class RootStore {
  public blockchain!: BlockChainStore;

  constructor(){
    this.blockchain = new BlockChainStore(this);
  }

  reset(){
    this.blockchain = new BlockChainStore(this);
  }
}

export default RootStore;
