import { Controller, Post, UsePipes, Body, UseGuards, Get } from '@nestjs/common';
import { HistoryService } from './history.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { AddToHistoryDto } from './dto/add-to-history.dto';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { UserAuth } from '../guard/get-auth.decorator';
import { User } from '../users/users.model';

@Controller('history')
export class HistoryController {
  constructor(private historyService: HistoryService) {
  }

  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post('/add-to-history')
  addToHistory(@Body() dto: AddToHistoryDto, @UserAuth() user: User) {
    return this.historyService.addToHistory(dto, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user-id')
  getHistory(@UserAuth() user: User) {
    return this.historyService.getFromHistory(user.id);
  }

}
