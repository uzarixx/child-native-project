import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserAuth } from '../guard/get-auth.decorator';
import { User } from './users.model';
import { UsersService } from './users.service';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from '../guard/roles-auth.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Roles('USER')
  @UseGuards(RolesGuard)
  @Get('/me')
  getMe(@UserAuth() user: User) {
    return this.usersService.getUserByEmail(user.email);
  }
}
