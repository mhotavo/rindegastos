import { Controller, Get, Query } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { ConvertCurrencyDto } from './dto/convert-currency.dto';

@Controller('getConvertedAmount')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get()
  getConvertedAmount(@Query() ConvertCurrencyDto: ConvertCurrencyDto) {
    return this.currenciesService.convertAmount(ConvertCurrencyDto);
  }
}
