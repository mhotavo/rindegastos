import { IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength } from "class-validator";
export class ConvertCurrencyDto {
 
    @IsString()
    @MinLength(3)
    @MaxLength(3)
    @IsNotEmpty()
    readonly from: string;
    
    @IsString()
    @MinLength(3)
    @MaxLength(3)
    @IsNotEmpty()
    readonly to: string;

    @IsNumberString()
    @IsNotEmpty()
    readonly amount: number;
}
 