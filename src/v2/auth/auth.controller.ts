import { Controller, Get } from '@nestjs/common';

@Controller({
  version: '2',
  path:'auth'
})
export class AuthController {

  @Get()
  findAll(): string {
    return 'This action returns all apis for version 1';
  }
}