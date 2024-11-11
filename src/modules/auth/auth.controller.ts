import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterByUsernameDto } from './dto/register-by-username.dto';
import { LoginByUserNameDto } from './dto/login-by-username.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/username')
  async registerByUsername(
    @Body() registerByUsernameDto: RegisterByUsernameDto,
  ) {
    return await this.authService.registerByUsername(registerByUsernameDto);
  }

  @Post('login/username')
  async loginByUserName(@Body() loginByUserNameDto: LoginByUserNameDto) {
    const user = await this.authService.validateUser(loginByUserNameDto);
    return await this.authService.loginByUsername(user);
  }
}
