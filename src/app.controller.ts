import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/animal')
  getAnimal(@Query('animal') animal: string): any {
    return this.appService.searchForAnimal(animal);
  }

  @Get('/hello-cat')
  helloCat() {
    return {
      meow: 'meow',
    };
  }
}
