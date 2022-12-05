import { Controller, Get, Query } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { NumberDto } from './dto/number.dto';

@Controller('getTheNumber')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}
  
    @Get()
    daysLeft(@Query() NumberDto: NumberDto) {
      return this.numbersService.concatenate(NumberDto);
    }
  }

 