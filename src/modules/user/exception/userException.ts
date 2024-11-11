import { BadRequestException } from '@nestjs/common';

export class UserException {
  static userNotFont() {
    throw new BadRequestException('.این کاربر ثبت نشده است', {
      cause: new Error(),
      description: 'User id not found',
    });
  }

  static userExists() {
    throw new BadRequestException('.این کاربر ثبت شده است', {
      cause: new Error(),
      description: 'user exists with same username',
    });
  }
}
