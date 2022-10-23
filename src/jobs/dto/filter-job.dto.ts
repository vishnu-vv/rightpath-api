import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterJobDto {
  @ApiPropertyOptional()
  @IsOptional()
  courseId: string;

  @ApiPropertyOptional()
  @IsOptional()
  salaryMin: number;

  @ApiPropertyOptional()
  @IsOptional()
  salaryMax: number;
  
  @ApiPropertyOptional()
  @IsOptional()
  skills: number[];
}
