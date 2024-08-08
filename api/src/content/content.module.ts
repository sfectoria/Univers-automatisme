import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ContentController],
  providers: [ContentService],
  imports: [PrismaModule],
})
export class ContentModule {}
