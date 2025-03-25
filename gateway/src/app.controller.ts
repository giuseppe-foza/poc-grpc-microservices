import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): { status: string; message: string } {
    return { status: 'Ok', message: 'Welcome!' };
  }
}
