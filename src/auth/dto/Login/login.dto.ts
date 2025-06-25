import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsEmail()
    @ApiProperty({ example: 'vishv@example.com'})
    @AutoMap()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({example: 'strongpassword'})
    @AutoMap()
    password: string;
}