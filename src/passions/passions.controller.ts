import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PassionsService } from './passions.service';
import { CreatePassionDto } from './dto/create-passion.dto';
import { UpdatePassionDto } from './dto/update-passion.dto';

@Controller('passions')
export class PassionController {
  constructor(private readonly passionService: PassionsService) {}

  @Post()
  create(@Body() createPassionDto: CreatePassionDto) {
    return this.passionService.create(createPassionDto);
  }

  @Get()
  findAll() {
    return this.passionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassionDto: UpdatePassionDto) {
    return this.passionService.update(id, updatePassionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passionService.remove(id);
  }
}
