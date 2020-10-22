import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UserDto } from './user.dto';
import BaseResult from '@utils/BaseResult';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  /**
   *
   * @param id 用户id
   * @description 根据用户id查找用户
   */
  async findOneById(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      return BaseResult.error(1, '没有该用户');
    }
    return BaseResult.ok(user);
  }

  async findOneByName(username: string) {
    const user = await this.usersRepository.findOne({
      username,
    });
    return user;
  }
  /**
   * @description 创建用户 注册
   * @param userDto
   */
  create(userDto: UserDto) {
    return this.usersRepository.save(userDto);
  }
  /**
   * @param id user id
   * @returns delete user
   */
  async remove(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      return BaseResult.error(1, '没有该用户');
    }
    await this.usersRepository.delete(id);
    return BaseResult.ok(user);
  }
}
