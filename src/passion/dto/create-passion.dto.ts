import { ApiProperty } from '@nestjs/swagger';

export class CreatePassionDto {
	@ApiProperty()
	title: string;

	@ApiProperty()
	passionCategoryId: number;
}
