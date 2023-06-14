import { HttpException } from '@nestjs/common';

export class CatError extends HttpException {
  constructor() {
    super(
      {
        message: 'this is a cat error',
      },
      403,
    );
  }
}
