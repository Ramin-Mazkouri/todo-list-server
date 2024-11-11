import { IsString, IsStrongPassword } from 'class-validator';

export class LoginByUserNameDto {
  @IsString()
  username: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        ' .رمز عبور باید حداقل 8 کاراکتر داشته باشد و شامل حداقل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک سمبل باشد.',
    },
  )
  password: string;
}
