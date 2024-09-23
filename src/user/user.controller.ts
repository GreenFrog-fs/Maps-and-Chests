import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('find')
  getUserById(@Body('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Post('save')
  createUserById(@Body('id') id: string) {
    return this.userService.createUserById(id);
  }
}
