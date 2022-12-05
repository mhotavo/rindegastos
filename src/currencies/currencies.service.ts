import { Injectable } from '@nestjs/common';
import { ConvertCurrencyDto } from './dto/convert-currency.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { RatesResponse } from './interfaces/rates-response.interface';

@Injectable()
export class CurrenciesService {
  constructor(private readonly http: AxiosAdapter) {}

  async convertAmount(ConvertCurrencyDto: ConvertCurrencyDto) {
    const { rates } = await this.http.get<RatesResponse>(process.env.API_URL);
    
    let rate:number = 0;
    if (ConvertCurrencyDto.from === 'USD') {
      rate = rates[ConvertCurrencyDto.to];
    } else {
      rate =
        rates[ConvertCurrencyDto.to] / rates[ConvertCurrencyDto.from];
    }
    const ConvertedAmount = (rate * ConvertCurrencyDto.amount).toFixed(4);

    return { convertedAmount: ConvertedAmount };
  }
}
