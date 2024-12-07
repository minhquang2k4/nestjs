import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get() // tượng trưng cho phương thức GET của API
  @Render('home')
  getHello() {
    // return 'this.appService.getHello()';
    console.log(this.configService.get('PORT'));

    const msg = this.appService.getHello();

    return {
      message: msg,
    };
  }
}
