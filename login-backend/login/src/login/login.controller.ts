import { Controller, Body, Post, Get, Query } from '@nestjs/common';
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

  @Get('/user')
  async loginUser(
    @Query('email') email: string,
    @Query('password') password: string,
  ): Promise<{ email: string; password: string }> {
    return await this.loginService.loginUser(email, password);
  }

  @Get('/check-user')
  async checkUserEmail(@Query('email') email: string): Promise<boolean> {
    try {
      return await this.loginService.getUserData(email);
    } catch (error) {
      console.error('Failed to check user email:', error);
      throw error;
    }
  }
}
