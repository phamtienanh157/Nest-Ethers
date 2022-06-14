import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { EthersConnectModule } from './ethers-connect/ethers-connect.module';

@Module({
  imports: [CoursesModule, EthersConnectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
