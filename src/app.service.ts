import { Injectable } from '@nestjs/common';
import { DuckError } from './errors/duck-error';
import { CatError } from './errors/cat-error';
import { FlyingAnimalError } from './errors/flying-animal-error';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public searchForAnimal(animal: string) {
    if (animal === 'duck') {
      throw new DuckError();
    }

    if (animal === 'cat') {
      throw new CatError();
    }

    if (animal === 'dog') {
      throw new Error('i dont know what to do with a dog');
    }

    if (animal === 'eagle') {
      throw new FlyingAnimalError(animal);
    }

    return {
      animal,
      isGood: true,
      isPretty: true,
      isLovable: true,
    };
  }
}
