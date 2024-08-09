import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateContentDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  title?: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  subtitle?: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  paragraph?: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  button1?: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  button2?: string;

  @IsInt()
  @ApiProperty()
  sectionId: number; // Assurez-vous que ceci est correctement typé

//   @IsOptional()
//   images?: ImageDto[]; // ImageDto doit être défini ailleurs dans votre code
}
