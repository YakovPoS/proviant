import { Controller, Post, UseGuards, Body } from '@nestjs/common';
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
  @Post('delete')
  async deleteNews(@Body() deleteNewsDto) {
    return this.newsService.deleteNews(deleteNewsDto.title, deleteNewsDto.description, deleteNewsDto.image );
  }
  @Post('change')
  async changeNews(@Body() changeNewsDto) {
    return this.newsService.changeNews(changeNewsDto.title, changeNewsDto.description, changeNewsDto.image );
  }
}
