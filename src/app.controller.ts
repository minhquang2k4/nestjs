import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // tượng trưng cho phương thức GET của API
  @Render('home')
  getHello() {
    // return 'this.appService.getHello()';
    const msg = this.appService.getHello();

    return {
      message: msg,
    };
  }
}
