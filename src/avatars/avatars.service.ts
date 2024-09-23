import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvatarsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllAvatars() {
    return await this.prisma.avatar.findMany();
  }

  async buyAvatar(userid: number, avatarid: number) {
    return this.prisma.$transaction(async (prisma) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: userid },
          select: { points: true },
        });
        const avatar = await prisma.avatar.findUnique({
          where: { id: avatarid },
          select: { price: true },
        });
        if (user.points < avatar.price) {
          throw new Error('Insufficient points');
        }
        await prisma.user.update({
          where: { id: userid },
          data: { points: user.points - avatar.price },
        });
        await prisma.avatarToUser.create({
          data: {
            user: { connect: { id: userid } },
            avatar: { connect: { id: avatarid } },
          },
        });
        return { message: 'Avatar purchased successfully' };
      } catch (error) {
        return { message: 'ошибка' };
      }
    });
  }

  async getUserAvatars(userid: number) {
    return await this.prisma.avatarToUser.findMany({
      where: { userid },
      include: {
        avatar: true,
      },
    });
  }
}
