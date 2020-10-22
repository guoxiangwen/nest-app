import { Body, Controller, Delete, Get, HttpCode, Param, Post, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import BaseResult from '@utils/BaseResult';
import { makeSalt, encryptPassword } from '@utils/cypto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    Logger.log('查询所有用户');
    return this.usersService.findAll();
  }
  @Get(':id')
  getUserById(@Param('id') id) {
    Logger.log(`查询${id}用户`);
    return this.usersService.findOneById(id);
  }
  @Post('/login')
  async login(@Body('id') user: UserDto) {
    Logger.log(`用户${user.username}正在登录......`);

    // return this.usersService.findOneById(id);
  }

  /**
   *
   * @param userDto
   */
  @Post('/register')
  async register(@Body() userDto: UserDto) {
    // 用户已存在
    const user = await this.usersService.findOneByName(userDto.username);
    if (user) {
      return BaseResult.error(10010, '用户已存在');
    }
    // 处理密码
    const salt = makeSalt();
    const hashPwd = encryptPassword(userDto.password, salt);
    this.usersService.create({
      username: userDto.username,
      password: hashPwd,
      salt,
    });
    return BaseResult.ok('创建成功');
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    return this.usersService.remove(id);
  }
}
