import { Optional } from '@nestjs/common';

export class UpdateBookDto {
  @Optional()
  title: string;
}
