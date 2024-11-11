import {
  IsDate,
  IsMobilePhone,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @Length(3, 30, { message: 'نام باید بین 2 تا 30 کاراکتر باشد' })
  first_name?: string;

  @IsOptional()
  @IsString()
  @Length(3, 30, { message: 'نام خانوادگی باید بین 2 تا 30 کاراکتر باشد' })
  last_name?: string;

  @IsOptional()
  @IsString()
  @IsMobilePhone('fa-IR')
  mobile?: string;

  @IsOptional()
  @IsDate()
  birth_date?: Date;

  @IsOptional()
  @IsString()
  image_avatar?: string;

  @IsOptional()
  @IsString()
  image_thumbnail?: string;
}
