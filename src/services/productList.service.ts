import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductListService {
  getHello(): string {
    return 'Hello World!';
  }
}
