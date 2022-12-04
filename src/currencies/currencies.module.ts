import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesController } from './currencies.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
  imports: [CommonModule]
})
export class CurrenciesModule {}
