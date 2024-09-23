import { Body, Controller, Get, Post } from '@nestjs/common';
import { AvatarsService } from './avatars.service';

@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) { }

  @Get('all')
  getAvatars() {
    return this.avatarsService.getAllAvatars();
  }

  @Post('opened')
  getUserAvatars(@Body() body: { userid: string }) {
    const { userid } = body;
    return this.avatarsService.getUserAvatars(userid);
  }

  @Post('buy')
  async buyAvatar(@Body() body: { userid: string; avatarid: number }) {
    const { userid, avatarid } = body;
    return this.avatarsService.buyAvatar(userid, avatarid);
  }
}
