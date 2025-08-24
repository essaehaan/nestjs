import { IsString, IsEmail, IsInt, Min, Max, isEmail  } from "class-validator";


export class CreateUserDto{
    @IsString()
    name: string;

    @IsEmail()
    email:string;

    @IsInt()
    @Min(18)
    @Max(100)
    age: number;


}