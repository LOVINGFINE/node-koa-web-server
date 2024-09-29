import { BaseController, Controller, Post } from '@/middleware/controller';

@Controller('')
export default class UserRouter extends BaseController {
  @Post('login')
  login() {
    console.log(this.body);
    this.status.ok('hello world!');
  }
}
