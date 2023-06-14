import { HttpException } from '@nestjs/common';

export class DuckError extends HttpException {
  constructor() {
    super(
      {
        message: 'this is a duck error',
      },
      403,
    );
  }
}
