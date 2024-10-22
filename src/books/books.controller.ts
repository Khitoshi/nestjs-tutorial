import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './book.model';
import { BookStatus } from './books-status.enum';
import { RequestBookDto } from './request/request-book.dto';
import { ResponseBookDto } from './response/response-book.dto';

@Controller('books')
export class BooksController {
    constructor(
        private readonly booksService: BooksService
    ) {
    }

    @ApiOperation({ summary: 'bookを新規作成' })
    @ApiResponse({
        type: ResponseBookDto,
    })
    @Post('')
    create(@Body() body: RequestBookDto): ResponseBookDto {
        const book: Book = {
            id: body.id,
            name: body.name,
            status: BookStatus.RENTABLE
        }
        return this.booksService.create(book);
    }

}
