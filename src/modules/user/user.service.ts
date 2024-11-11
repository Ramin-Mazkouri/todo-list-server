import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User as UserEntity } from './entities/user.entity';
import { Profile as ProfileEntity } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserException } from './exception/userException';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  protected async updateUser(data: UserEntity) {
    return this.userRepository.save(data);
  }

  async findOneById(id) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findOneByUsername(username) {
    return await this.userRepository.findOne({ where: { username } });
  }

  async createUserWithUsername(data: { username: string; password: string }) {
    const userName = await this.userRepository.findOne({
      where: { username: data.username },
    });

    userName && UserException.userExists();

    const user = this.userRepository.create(data);

    return this.userRepository.save(user);
  }

  async updateProfile(userId: string, profileData: Partial<ProfileEntity>) {
    const user = await this.findOneById(userId);

    if (!userId) UserException.userNotFont();

    const profile = await this.profileRepository.create(profileData);
    user.profile = profile;

    return this.userRepository.save(user);
  }
}
