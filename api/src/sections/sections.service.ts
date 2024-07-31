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

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return `This action updates a #${id} section`;
  }

  remove(id: number) {
    return this.prisma.section.delete({ where: { id } });
  }
}
