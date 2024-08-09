import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: CreateAuthDto) {
    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    // If no user is found, throw an error
    if (!user) {
      throw new HttpException('Invalid email', HttpStatus.BAD_REQUEST);
    }
    
    // Step 2: Check if the password is correct
    const validPassword = await bcrypt.compare(dto.password, user.password);
    // If password does not match, throw an error
    if (!validPassword) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }

    // Step 3: Generate a JWT and return it
    const { password, ...rest } = user;
    const token = await this.jwtService.signAsync(rest);
    return token;
  }
  // validateToken(token: string) {
  //   try {
  //     // Décode et valide le jeton
  //     const decoded = this.jwtService.verify(token);
  //     return { status: 'valid', user: decoded };
  //   } catch (error) {
  //     // Le jeton n'est pas valide
  //     throw new UnauthorizedException('Token invalide');
  //   }
  // }

  async findMe(token: string) {
    return await this.jwtService.decode(token);
  }

  async update(token: string, updateAuthDto: UpdateAuthDto) {
    // Decode the token to get the user ID
    const decodedToken: any = this.jwtService.decode(token);

    if (!decodedToken || !decodedToken.id) {
      throw new Error('Invalid or expired token');
    }

    const userId = decodedToken.id;
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (updateAuthDto.password) {
      const salt = await bcrypt.genSalt();
      updateAuthDto.password = await bcrypt.hash(updateAuthDto.password, salt);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: updateAuthDto,
    });

    const { password, ...rest } = updatedUser;
    return rest;
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
