import { Module } from '@nestjs/common';
import { ChestService } from './chest.service';
import { ChestController } from './chest.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [ChestController],
  providers: [ChestService, UserService],
})
export class ChestModule {}
