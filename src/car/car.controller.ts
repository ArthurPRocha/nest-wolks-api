import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateCarDTO } from './dto/create-car.dto';
import { CarService } from './car.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/decorators/user.decorators';
import { UpdatePutCarDTO } from './dto/update-put-car.dto';
import { UpdatePatchCarDTO } from './dto/update-patch-car.dto';

@UseGuards(AuthGuard)
@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() data: CreateCarDTO, @User('id') userId: string ) {
    console.log(data, userId)
    return this.carService.create(data, userId);
  }

  @Get()
  async list() {
    return this.carService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseUUIDPipe) id: string) {
    return this.carService.show(id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdatePutCarDTO,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.carService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchCarDTO,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.carService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carService.delete(id);
  }
}
