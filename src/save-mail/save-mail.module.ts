import { Module } from '@nestjs/common';
import { SaveMailService } from './save-mail.service';
import { SaveMailController } from './save-mail.controller';

@Module({
  controllers: [SaveMailController],
  providers: [SaveMailService],
})
export class SaveMailModule {}
