import { Injectable } from '@nestjs/common';
// import { CreateCurrencyDto } from './dto/create-currency.dto';
// import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class CurrenciesService {
 
  constructor(
    private readonly http: AxiosAdapter
  ) {}

  async findAll() {
     const data = await this.http.get('https://openexchangerates.org/api/latest.json?app_id=0828fbcec3b04f8f9765de703ada3cf1');
     return data;
  }

 
}
