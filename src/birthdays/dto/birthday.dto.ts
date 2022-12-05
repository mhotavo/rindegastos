import { IsDate } from "class-validator";
import { Type } from 'class-transformer';
export class BirthdayDto {
    @Type(() => Date)
    @IsDate()
    readonly birthdate: string;
}
 