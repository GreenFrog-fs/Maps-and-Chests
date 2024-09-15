import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ChestService } from './chest.service';
import { UserService } from 'src/user/user.service';

@Controller('chest')
export class ChestController {
  constructor(
    private readonly chestService: ChestService,
    private readonly userService: UserService,
  ) {}

  @Get('all')
  getActiveChests() {
    return this.chestService.getActiveChests();
  }

  @Patch(':id/:user_id/deactivate')
  async deactiveChest(
    @Param('id', ParseIntPipe) id: number,
    @Param('user_id', ParseIntPipe) user_id: number,
  ) {
    const chest = await this.chestService.deactiveChest(id);
    const user = await this.userService.updateUserPoints(user_id, chest.points);
    return { chest, user };
  }
}
