import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserWithUsernameDto } from './dto/create-user-with-username.dto';
import { UpdateProfileDto } from './dto/update-profile-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //   @Post('create/username')
  //   createWithUsername(
  //     @Body() createUserWithUsenameDto: CreateUserWithUsernameDto,
  //   ) {
  //     return this.userService.createUserWithUsername(createUserWithUsenameDto);
  //   }

  @Patch(':user_id/profile')
  async updateProfile(
    @Param('user_id') userId: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    this.userService.updateProfile(userId, updateProfileDto);
  }
}
