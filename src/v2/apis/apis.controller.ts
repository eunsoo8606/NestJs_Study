import { Controller, Get } from '@nestjs/common';

@Controller({
  version: '2',
  path:'apis'
})
export class ApisController {

  @Get()
  findAll(): string {
    return 'This action returns all apis for version 1';
  }
}