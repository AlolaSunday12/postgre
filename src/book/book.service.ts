import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  create(bookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(bookDto);

    return this.bookRepository.save(book);
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id });

    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async update(id: string, bookDto: UpdateBookDto): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id });

    if (!book) {
      throw new NotFoundException('Book not found');
    }
    Object.assign(book, bookDto);
    return this.bookRepository.save(book);
  }

  async delete(id: string): Promise<void> {
    const book = await this.bookRepository.findOneBy({ id });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    await this.bookRepository.delete(id);
  }
}
