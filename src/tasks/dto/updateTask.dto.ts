import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateDto{
    @IsNotEmpty()
    title: string;

    @IsOptional()
    description: string;
}