import { Injectable } from '@nestjs/common';
import { ConvertCurrencyDto } from './dto/convert-currency.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { RatesResponse } from './interfaces/rates-response.interface';

@Injectable()
export class CurrenciesService {
  constructor(private readonly http: AxiosAdapter) {}

  async convertAmount(ConvertCurrencyDto: ConvertCurrencyDto) {
    const data = await this.http.get<RatesResponse>(
      'https://openexchangerates.org/api/latest.json?app_id=0828fbcec3b04f8f9765de703ada3cf1',
    );
    let rate = 0;
    if (ConvertCurrencyDto.from === 'USD') {
      rate = data.rates[ConvertCurrencyDto.to];
    } else {
      rate =
        data.rates[ConvertCurrencyDto.to] / data.rates[ConvertCurrencyDto.from];
    }
    const ConvertedAmount = (rate * ConvertCurrencyDto.amount).toFixed(4);

    return { convertedAmount: ConvertedAmount };
  }
}
