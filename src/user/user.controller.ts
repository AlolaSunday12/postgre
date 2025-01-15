import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // Get all Users
  @Get()
  async getAllUsers() {
    return this.userService.findAll();
  }

  @Post()
  async signUp(@Body() body: SignUpDto) {
    return await this.userService.signup(body);
  }
}
