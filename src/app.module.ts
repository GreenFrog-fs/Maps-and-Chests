import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ChestModule } from './chest/chest.module';
import { AvatarsModule } from './avatars/avatars.module';

@Module({
  imports: [PrismaModule, UserModule, ChestModule, AvatarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
