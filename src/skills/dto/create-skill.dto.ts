import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  jobId: number;
}
