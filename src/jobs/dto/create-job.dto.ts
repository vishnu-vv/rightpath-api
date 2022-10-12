import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    viewedUsers: number;

    @ApiProperty()
    intrestedUsers: number;

    @ApiProperty()
    salaryMin: number;

    @ApiProperty()
    salaryMax: number;

    @ApiProperty()
    imageUrl: number;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
	courseId: number;
}
