import { Injectable, OnModuleInit } from '@nestjs/common';
import { Contract } from 'ethers';
import { EthersContract, InjectContractProvider, Wallet } from 'nestjs-ethers';

@Injectable()
export class EthersConnectService implements OnModuleInit {
  private wallet: Wallet;

  constructor(
    @InjectContractProvider()
    public readonly contract: EthersContract,
  ) {}

  async onModuleInit() {
    throw new Error('Method not implemented.');
  }

  getContract(contractAddress: string, abi: any) {
    const contract: Contract = this.contract.create(
      contractAddress,
      abi,
      this.wallet,
    );
    return contract;
  }
}
