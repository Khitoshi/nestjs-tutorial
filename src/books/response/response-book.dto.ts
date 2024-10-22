import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ResponseBookDto {
    @ApiProperty({
        description: 'Id of the book',
        type: String,
        example: '1',
    })
    @IsString()
    id: string;

    @ApiProperty({
        description: 'Name of the book',
        type: String,
        example: 'example book',
    })
    @IsString()
    name: string;
}