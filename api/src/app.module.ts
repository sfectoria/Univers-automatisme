import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PagesModule } from './pages/pages.module';
import { SectionsModule } from './sections/sections.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, PagesModule, SectionsModule, ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
