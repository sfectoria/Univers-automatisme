import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SectionsService {
  constructor(private readonly prisma: PrismaService) {}


  create(createSectionDto: CreateSectionDto) {
    return this.prisma.section.create( {data:createSectionDto });
  }

  findAll() {
    return this.prisma.section.findMany();
  }

  findOne(id: number) {
    return this.prisma.section.findUnique( { where: {id} } );
  }
  async getSection(name: string) {
    return this.prisma.section.findMany({
      where: {name},
      include: { contents: true },
    });
  }

  async updateSection(id: number, updateSectionDto: UpdateSectionDto) {
    return this.prisma.section.update({
      where: { id },
      data: updateSectionDto,
      include: { contents: true },  // Inclure les contenus associés si nécessaire
    });
  }

  remove(id: number) {
    return this.prisma.section.delete({ where: { id } });
  }
}
