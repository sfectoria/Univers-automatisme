import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Controller('users')
@ApiTags('users') //bich ta3tih el essm fel swagegr
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiSecurity('apiKey') //logo cadna
  @Post('AddUser')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin', 'Admin') // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  async create(@Body() createUsersDto: CreateUsersDto, @Req() req: any) {
    const user = req.user;
    if (
      !['Admin', 'SuperAdmin'].includes(user.role) ||
      !['Admin', 'Employee'].includes(createUsersDto.role)
    ) {
      throw new ForbiddenException(
        'You do not have permission to perform this action',
      );
    }
    return this.usersService.create(createUsersDto);
  }

  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin', 'Admin') // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @Get('AllUsers')
  // @ApiBearerAuth() //logo cadna to indicate that authentication is required:
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin', ' Admin') // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @ApiSecurity('apiKey')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin') // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('SuperAdmin') // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const userToDelete = await this.usersService.findOne(+id);

    if (userToDelete.role === 'SuperAdmin') {
      throw new ForbiddenException('You cannot delete a SuperAdmin.');
    }

    return this.usersService.remove(+id);
  }
}
