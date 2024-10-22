import { BookStatus } from './books-status.enum';

export interface Book {
    id: string;
    name: string;
    status: BookStatus;
}