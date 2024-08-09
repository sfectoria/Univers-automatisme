import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContentDto } from './create-content.dto';

export class UpdateContentDto  extends PartialType(CreateContentDto) {}
