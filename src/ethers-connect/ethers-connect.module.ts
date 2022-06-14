import { Module } from '@nestjs/common';
import { BINANCE_NETWORK, EthersModule } from 'nestjs-ethers';
import { EthersConnectService } from './ethers-connect.service';

@Module({
  imports: [
    EthersModule.forRoot({
      network: BINANCE_NETWORK,
    }),
  ],
  providers: [EthersConnectService],
})
export class EthersConnectModule {}
