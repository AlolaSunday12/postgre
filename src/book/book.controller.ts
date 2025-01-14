import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBooks() {
    return this.bookService.findAll();
  }

  @Post()
  async createBook(@Body() body: CreateBookDto) {
    return this.bookService.create(body);
  }

  @Get(':id')
  async getBook(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }
}
