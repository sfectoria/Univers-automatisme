import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSectionDto } from './create-section.dto';
import { IsInt } from 'class-validator';

export class UpdateSectionDto  {
    @ApiProperty()
    name?: string;
  
    @ApiProperty()
    content?: string;

    @IsInt()
    @ApiProperty()
    pageId?: number;
}
