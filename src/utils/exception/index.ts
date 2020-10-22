import { HttpException } from '@nestjs/common';

export class UserException extends HttpException {
  constructor(errcode: number, errmsg: string, statusCode: number) {
    super({ errcode, errmsg }, statusCode);
  }
}
