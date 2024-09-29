import { BaseController, Controller, Get } from '@/middleware/controller';

@Controller('/user')
export default class UserRouter extends BaseController {
  @Get('myInfo')
  getList() {
    console.log(this.params);
    console.log(this.query.a);

    this.status.ok('hello world!');
  }
}
