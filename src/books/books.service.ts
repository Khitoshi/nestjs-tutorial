import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BooksService {
    private books: Book[] = [];

    create(book: Book): Book {
        this.books.push(book);
        return book;
    }

    findAll(): Book[] {
        return this.books;
    }

    findById(id: string): Book {
        return this.books.find((book) => book.id === id);
    }
}
