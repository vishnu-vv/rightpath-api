import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterCourseDto {
  @ApiPropertyOptional()
  @IsOptional()
  passionIds: string[];

  @ApiPropertyOptional()
  @IsOptional()
  locations: string[];
  
  @ApiPropertyOptional()
  @IsOptional()
  durations: string[];
  
  @ApiPropertyOptional()
  @IsOptional()
  universityIds: string[];
}
