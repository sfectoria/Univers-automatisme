import { IsEmail, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
export class CreateUsersDto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  @IsEnum(UserRole, { message: 'Role must be either Admin or Employee' })
  role: UserRole;
}
