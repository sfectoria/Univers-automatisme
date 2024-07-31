import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PagesService {
  constructor(private readonly prisma: PrismaService) {}

  
  create(createPageDto: CreatePageDto) {
    return this.prisma.page.create({data:createPageDto});
  }

  findAll() {
    return this.prisma.page.findMany();
  }

  findOne(id: number) {
    return this.prisma.page.findUnique( { where: {id} } );
  }

  update(id: number, updatePageDto: UpdatePageDto) {
    return `This action updates a #${id} page`;
  }

  remove(id: number) {
    return this.prisma.page.delete({ where: { id } });
  }

}
