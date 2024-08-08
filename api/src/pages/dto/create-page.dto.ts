import { ApiProperty } from '@nestjs/swagger';

export class CreatePageDto {

    @ApiProperty()
    title: string;
  
    @ApiProperty()
    slug: string;
  
    @ApiProperty()
    content?: string;

}
