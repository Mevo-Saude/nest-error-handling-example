import { HttpException } from '@nestjs/common';

export class FlyingAnimalError extends HttpException {
  constructor(animal: string) {
    super(
      {
        animal,
        isBird: true,
        weLikeBirds: false,
      },
      403,
    );
  }
}
