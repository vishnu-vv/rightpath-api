import { ApiProperty } from '@nestjs/swagger';

export class CreateUniversityDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    location: string;

    @ApiProperty()
    imageUrl: string;
}
