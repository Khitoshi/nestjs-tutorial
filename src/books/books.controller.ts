import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
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

    @ApiOperation({ summary: 'book全取得' })
    @ApiResponse({
        type: ResponseBookDto,
    })
    @Get('')
    findAll(): ResponseBookDto[] {
        const books = this.booksService.findAll();
        return books.map((book) => {
            return {
                id: book.id,
                name: book.name
            }
        });
    }

    @ApiOperation({ summary: 'IDを指定した取得' })
    @ApiResponse({
        type: ResponseBookDto,
    })
    @Get(':id')
    findById(@Param('id') id: string): ResponseBookDto {
        return this.booksService.findById(id);
    }

    @ApiOperation({ summary: 'IDを指定したステータス更新' })
    @ApiResponse({
        type: ResponseBookDto,
    })
    @Patch(':id')
    updateStatus(@Param('id') id: string): ResponseBookDto {
        return this.booksService.updateStatus(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        this.booksService.delete(id);
    }
}
