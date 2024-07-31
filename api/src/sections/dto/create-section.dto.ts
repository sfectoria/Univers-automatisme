
import { ApiProperty } from "@nestjs/swagger"
import { IsInt } from "class-validator";
export class CreateSectionDto {

    @ApiProperty()
    name: string;
  
    @ApiProperty()
    content?: string;

    @IsInt()
    @ApiProperty()
    pageId: number;
}

