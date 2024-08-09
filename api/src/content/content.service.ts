import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContentDto: CreateContentDto) {
    return this.prisma.content.create({ data: createContentDto });
  }

  async findAll() {
    return this.prisma.content.findMany();
  }

  // async getContent(name: string) {
  //   return this.prisma.content.findMany({
  //     where: { name },
  //   });
  // }

  async findOne(id: number) {
    return this.prisma.content.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, updateContentDto: UpdateContentDto) {
    return this.prisma.content.update({
      where: { id },
      data: updateContentDto,
    });
  }

  async remove(id: number) {
    return this.prisma.content.delete({ where: { id } });
  }
}
