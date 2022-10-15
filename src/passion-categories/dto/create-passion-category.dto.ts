import { ApiProperty } from '@nestjs/swagger';

export class CreatePassionCategoryDto {
  @ApiProperty()
  title: string;
}
