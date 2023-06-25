import { Controller, Post, UseGuards, Body, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { NewsService } from './news.service';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/role.enum';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('add')
  async addNews(@Body() addNewsDto) {
    return this.newsService.addNews(addNewsDto.title, addNewsDto.description, addNewsDto.image );
  }
  @Delete('delete/:id')
  async deleteNews(@Param('id',new ParseIntPipe())id:number) {
    return this.newsService.deleteNews(id);
  }
  @Post('change/:id')
  async changeNews(@Param('id',new ParseIntPipe())id:number, @Body() changeNewsDto) {
    return this.newsService.changeNews(id, changeNewsDto.title, changeNewsDto.description, changeNewsDto.image );
  }
}
