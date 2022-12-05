import { Injectable } from '@nestjs/common';
import { BirthdayDto } from './dto/birthday.dto';

@Injectable()
export class BirthdaysService {
  
  daysLeft(BirthdayDto: BirthdayDto) {
    const today:Date = new Date();
    const birthday:Date = new Date();
    const birthdate:Date = new Date(BirthdayDto.birthdate);
    // set next birthday date
    birthday.setMonth(birthdate.getMonth());
    birthday.setDate(birthdate.getDate());

    // Check if you already have a birthday this year
    if (today.getTime() >= birthday.getTime()) {
      birthday.setFullYear(today.getFullYear() + 1);
    }

    let diffTime:number = birthday.getTime() - today.getTime();
    let days:number = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return { daysUntilYourBirthday: days };
  }
}
