import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  overview: string;

  @ApiProperty()
  universityId: number;

  @ApiProperty()
  passionId: number;
}