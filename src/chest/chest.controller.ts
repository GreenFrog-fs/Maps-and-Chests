import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ChestService } from './chest.service';

@Controller('chest')
export class ChestController {
  constructor(private readonly chestService: ChestService) {}

  @Get('')
  getActiveChests() {
    console.log('запрос поиска сундуков');
    return this.chestService.getActiveChests();
  }

  @Patch(':id/deactivate')
  async deactiveChest(@Param('id', ParseIntPipe) id: number) {
    console.log(`Запрос на деактивацию сундука с ID ${id}`);
    return this.chestService.deactiveChest(id);
  }
}
