import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('find')
  getUserById(@Body('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id);
  }

  @Post('save')
  createUserById(@Body('id', ParseIntPipe) id: number) {
    return this.userService.createUserById(id);
  }
}
