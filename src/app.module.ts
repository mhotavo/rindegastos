import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from './currencies/currencies.module';
import { BirthdaysModule } from './birthdays/birthdays.module';

@Module({
  imports: [CurrenciesModule, BirthdaysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
