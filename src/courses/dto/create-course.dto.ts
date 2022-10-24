import { ApiProperty } from '@nestjs/swagger';
import { Duration } from '../course.entity';

export class CreateCourseDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  overview: string;
  
  @ApiProperty({ enum: Duration })
  duration: Duration = Duration['4 years'];

  @ApiProperty()
  fee: number;

  @ApiProperty()
  universityId: number;

  @ApiProperty()
  passionId: number;

  @ApiProperty()
  imageUrl: string;
}
