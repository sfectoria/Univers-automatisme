import { ApiProperty } from "@nestjs/swagger";

export class CreateContentDto {
    @ApiProperty()
    name: string;
    @ApiProperty()

    value: string;
    @ApiProperty()

    sectionId: number;
}
