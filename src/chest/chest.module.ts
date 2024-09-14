import { Module } from '@nestjs/common';
import { ChestService } from './chest.service';
import { ChestController } from './chest.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ChestController],
  providers: [ChestService],
})
export class ChestModule {}
