import { Controller, Get } from '@nestjs/common';
import { ChestService } from './chest.service';

@Controller('chest')
export class ChestController {
  constructor(private readonly chestService: ChestService) {}

  @Get('')
  getActiveChests() {
    console.log('запрос поиска сундуков');
    return this.chestService.getActiveChests();
  }
}
