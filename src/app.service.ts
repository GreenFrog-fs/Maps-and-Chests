import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getChests(lat: number, lon: number) {
    const distanceQuery = Prisma.sql`SELECT * FROM Chest WHERE 6371 * acos(cos(radians(${lat}))
    * cos(radians(lat)) * cos(radians(lon) - radians(${lon})) + sin(radians(${lat})) * sin(radians(lat))) < 2;`;
    return this.prisma.$queryRaw(distanceQuery);
  }
}
