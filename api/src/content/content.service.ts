import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentService {
  constructor(private readonly prisma: PrismaService) {}


  create(createContentDto: CreateContentDto) {
    return 'This action adds a new content';
  }

  async findAll() {
    return await this.prisma.content.findMany();
  }

  findOne(id: number) {
    return this.prisma.content.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return `This action updates a #${id} content`;
  }

  remove(id: number) {
    return `This action removes a #${id} content`;
  }
}
