import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/chests')
  getChests(@Query('lat') lat: string, @Query('lon') lon: string) {
    console.log("запрос выдачи сундуков")
    return this.appService.getChests(+lat, +lon);
  }
}
