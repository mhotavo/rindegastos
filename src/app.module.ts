import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from './currencies/currencies.module';
import { BirthdaysModule } from './birthdays/birthdays.module';
import { NumbersModule } from './numbers/numbers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CurrenciesModule,
    BirthdaysModule,
    NumbersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
