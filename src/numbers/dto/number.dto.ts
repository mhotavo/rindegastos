import { IsNotEmpty, IsNumberString } from "class-validator";

export class NumberDto {
    @IsNumberString()
    @IsNotEmpty()
    readonly first: number;

    @IsNumberString()
    @IsNotEmpty()
    readonly second: number;
}
