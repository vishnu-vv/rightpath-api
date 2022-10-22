import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Duration } from '../course.entity';

export class FilterCourseDto {
  @ApiPropertyOptional()
  @IsOptional()
  passionIds: string[];

  @ApiPropertyOptional()
  @IsOptional()
  locations: string[];
  
  @ApiPropertyOptional()
  @IsOptional()
  durations: Duration[];
  
  @ApiPropertyOptional()
  @IsOptional()
  universityIds: string[];
}
