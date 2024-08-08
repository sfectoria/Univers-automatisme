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

  async getContent(name: string) {
    return this.prisma.content.findMany({
      where: { name },
    });
  }

  findOne(id: number) {
    return this.prisma.content.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.prisma.content.update({
      where: { id },
      data: updateContentDto,
    });
  }

  remove(id: number) {
    return this.prisma.content.delete({ where: { id } });
  }
}
