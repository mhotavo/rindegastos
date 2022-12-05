import { Injectable } from '@nestjs/common';
import { NumberDto } from './dto/number.dto';

@Injectable()
export class NumbersService {

    concatenate(NumberDto: NumberDto){
        let concat: string = '';
        for (let index = 1; index <= NumberDto.second; index++) {
            concat +=(+NumberDto.first * index)
            if (concat.length >= 9) { break; } 
        }
        return { "number": +concat.substring(0, 9) }
    }
}
