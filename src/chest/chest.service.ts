import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ChestService {
  constructor(private readonly prisma: PrismaService) {}

  async getActiveChests() {
    const result = await this.prisma.chest.findMany({
      where: { active: true },
    });
    return result;
  }

  async deactiveChest(id: number) {
    const chest = await this.prisma.chest.findUnique({
      where: { id },
      select: { active: true },
    });
    if (!chest || !chest.active) {
      throw new ConflictException(`Chest with ID ${id} is already deactivated`);
    }
    const result = await this.prisma.chest.update({
      where: { id },
      data: { active: false },
    });
    return result;
  }

  @Cron('0 0 * * *')
  async updateChests() {
    await this.prisma.$executeRawUnsafe(`
      UPDATE webappchest
      SET active = false;
    `);
    await this.prisma.$executeRawUnsafe(`
      UPDATE webappchest
      SET active = true
      WHERE id IN (
        SELECT id
        FROM webappchest
        ORDER BY RANDOM()
        LIMIT 20
      );
    `);
  }
}
