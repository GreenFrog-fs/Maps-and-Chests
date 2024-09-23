import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AvatarsService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllAvatars() {
        return await this.prisma.avatar.findMany();
    }
}
