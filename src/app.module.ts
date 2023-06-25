import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { NewsModule } from './news/news.module';
import { SaveMailModule } from './save-mail/save-mail.module';
import { ConsultationModule } from './consultation/consultation.module';
import { RatePlanModule } from './rate-plan/rate-plan.module';

@Module({
  imports: [AuthModule, UsersModule, NewsModule, SaveMailModule, ConsultationModule, RatePlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
