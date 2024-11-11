import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword, hashedPassword } from 'src/helper';
import { User as UserEntity } from '../user/entities/user.entity';
import { UserModel } from '../user/interfaces/user.inteface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(data: { username: string; password }) {
    const user = await this.userService.findOneByUsername(data.username);
    if (
      user &&
      (await comparePassword({ pass1: data.password, pass2: user.password }))
    ) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException(
      'دسترسی مجاز نمی باشد. لطفا مجداد وارد شوید.',
    );
  }

  async registerByUsername(data: { username: string; password: string }) {
    const password = await hashedPassword(data.password);
    return this.userService.createUserWithUsername({
      ...data,
      password,
    });
  }

  async loginByUsername(user: UserModel) {
    const payload = { username: user.username, sub: user.id };
    const { google_id, ...userData } = user;
    return {
      user: userData,
      token: this.jwtService.sign(payload),
    };
  }
}
