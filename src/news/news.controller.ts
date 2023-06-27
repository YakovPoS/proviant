import { Controller, Post, UseGuards, Body, Delete, Param, ParseIntPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { NewsService } from './news.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/role.enum';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('add')
  @UseInterceptors(FileInterceptor('file'))
    async addNews(@UploadedFile() file: Express.Multer.File, @Body() addNewsDto) {
      return this.newsService.addNews(addNewsDto.title, addNewsDto.description, file);
  }


  @Delete('delete/:id')
  async deleteNews(@Param('id',new ParseIntPipe())id:number) {
    return this.newsService.deleteNews(id);
  }
  
  @Post('change/:id')
  @UseInterceptors(FileInterceptor('file'))
  async changeNews(@Param('id',new ParseIntPipe())id:number, @Body() changeNewsDto, @UploadedFile() file: Express.Multer.File) {
    return this.newsService.changeNews(id, changeNewsDto.title, changeNewsDto.description, file );
  }
}

