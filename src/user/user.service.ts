import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) throw new NotFoundException('пользователь не найден');
    return user;
  }

  async createUserById(id: number) {
    return await this.prisma.user.create({
      data: {
        id,
        points: 0,
      },
    });
  }

  async updateUserPoints(id: number, pointsToAdd: number) {
    return await this.prisma.user.update({
      where: { id },
      data: {
        points: {
          increment: pointsToAdd,
        },
      },
    });
  }
}
