import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaveMailService } from './save-mail.service';

@Controller('save-mail')
export class SaveMailController {
  constructor(private readonly saveMailService: SaveMailService) {}

  @Post()
    async saveMail(@Body() saveMailDto) {
    return this.saveMailService.saveMail(saveMailDto.mail);
  }
}
