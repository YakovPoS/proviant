import { Controller, Post, Body } from '@nestjs/common';
import { ConsultationService } from './consultation.service';

@Controller('consultation')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Post()
    async saveConsultationReq(@Body() saveConsultationDto) {
    return this.consultationService.saveConsultation(saveConsultationDto);
  }
}
