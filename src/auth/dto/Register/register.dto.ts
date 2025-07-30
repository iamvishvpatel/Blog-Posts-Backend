import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, MinLength } from "class-validator";
import { Role } from "src/role/entities/role.entity";

export class RegisterDto{
    @IsNotEmpty()
    @ApiProperty({example: 'vishvpatel'})
    @AutoMap()
    name: string;

    @IsEmail()
    @ApiProperty({example: 'vishv@example.com'})
    @AutoMap()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({example: 'strongpassword'})
    @AutoMap()
    password: string;

    @IsOptional()
    @AutoMap()
    @ApiProperty({example: 'Software Developer'})
    bio?: string;

    // @IsOptional()
    // @ApiProperty({example: 2})
    // // @IsInt()
    // role?: Role ;

    @ApiProperty({example: 2})
    @AutoMap()
    @IsNumber()
    roleId: number;
}