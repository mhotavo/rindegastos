import { Injectable } from '@nestjs/common';
import { BirthdayDto } from './dto/birthday.dto';

@Injectable()
export class BirthdaysService {
  
  daysLeft(BirthdayDto: BirthdayDto) {
    const today = new Date();
    const birthday = new Date();
    const birthdate = new Date(BirthdayDto.birthdate);
    // set next birthday date
    birthday.setMonth(birthdate.getMonth());
    birthday.setDate(birthdate.getDate());

    // Check if you already have a birthday this year
    if (today.getTime() >= birthday.getTime()) {
      birthday.setFullYear(today.getFullYear() + 1);
    }

    let diffTime = birthday.getTime() - today.getTime();
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return { daysUntilYourBirthday: days };
  }
}
