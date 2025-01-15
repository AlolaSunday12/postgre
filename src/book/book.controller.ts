import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  // Get all books
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

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
