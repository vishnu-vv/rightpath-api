import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassionCategoriesService } from './passion-categories.service';
import { CreatePassionCategoryDto } from './dto/create-passion-category.dto';
import { UpdatePassionCategoryDto } from './dto/update-passion-category.dto';

@Controller('passion-categories')
export class PassionCategoriesController {
  constructor(private readonly passionCategoriesService: PassionCategoriesService) {}

  @Post()
  create(@Body() createPassionCategoryDto: CreatePassionCategoryDto) {
    return this.passionCategoriesService.create(createPassionCategoryDto);
  }

  @Get()
  findAll() {
    return this.passionCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passionCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassionCategoryDto: UpdatePassionCategoryDto) {
    return this.passionCategoriesService.update(+id, updatePassionCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passionCategoriesService.remove(+id);
  }
}
