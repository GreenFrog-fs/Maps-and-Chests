import { Controller, Get } from '@nestjs/common';
import { AvatarsService } from './avatars.service';

@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) { }

  @Get('all')
  getActiveChests() {
    return this.avatarsService.getAllAvatars();
  }
}
