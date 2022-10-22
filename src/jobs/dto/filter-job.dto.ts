import { IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterJobDto {
  @ApiPropertyOptional()
  @IsOptional()
  courseIds: string[];

  @ApiPropertyOptional()
  @IsOptional()
  salaryMin: number;

  @ApiPropertyOptional()
  @IsOptional()
  salaryMax: number;
  
  @ApiPropertyOptional()
  @IsOptional()
  skills: number[];
  
  // TODO - Interested Users
  // @ApiPropertyOptional()
  // @IsOptional()
  // intersetedUsers: string[];
}
