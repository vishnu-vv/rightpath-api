import { ApiProperty } from '@nestjs/swagger';
import { Duration } from '../course.entity';

export class CreateCourseDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  overview: string;
  
  @ApiProperty({ enum: Duration})
  duration: Duration;

  @ApiProperty()
  fee: number;

  @ApiProperty()
  universityId: number;

  @ApiProperty()
  passionId: number;
}
