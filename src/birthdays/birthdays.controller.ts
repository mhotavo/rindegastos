import { Controller, Get, Query } from '@nestjs/common';
import { BirthdaysService } from './birthdays.service';
import { BirthdayDto } from './dto/birthday.dto';

@Controller('getDaysUntilMyBirthday')
export class BirthdaysController {
  constructor(private readonly birthdaysService: BirthdaysService) {}

  @Get()
  daysLeft(@Query() BirthdayDto: BirthdayDto) {
    return this.birthdaysService.daysLeft(BirthdayDto);
  }
}
