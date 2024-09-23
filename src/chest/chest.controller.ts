import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ChestService } from './chest.service';
import { UserService } from 'src/user/user.service';

@Controller('chest')
export class ChestController {
  constructor(
    private readonly chestService: ChestService,
    private readonly userService: UserService,
  ) { }

  @Get('all')
  getActiveChests() {
    return this.chestService.getActiveChests();
  }

  @Patch('deactivate')
  async deactiveChest(
    @Body('chest_id', ParseIntPipe) id: number,
    @Body('user_id') user_id: string,
  ) {
    const chest = await this.chestService.deactiveChest(id);
    const user = await this.userService.updateUserPoints(user_id, chest.points);
    return { chest, user };
  }
}
