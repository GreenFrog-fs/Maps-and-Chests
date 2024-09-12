import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log("запрос поиска")
    return this.userService.findUserById(id);
  }

  @Post(':id')
  createUserById(@Param('id', ParseIntPipe) id: number) {
    console.log("запрос добавления")
    return this.userService.createUserById(id);
  }
}
