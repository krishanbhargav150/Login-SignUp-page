import { Controller, Body, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/signup')
  async signUp(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<{ email: string; password: string }> {
    return await this.loginService.signUp(email, password);
  }
}
