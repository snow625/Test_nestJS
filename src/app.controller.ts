import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  BadRequestException,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): number {
    if (id < 1) {
      throw new BadRequestException('Id more 0');
    }
    return id;
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateDto) {
    const res = await this.appService.save(dto);
    return res;
  }
}
