import { Controller, Post, Body } from '@nestjs/common';
import { RatePlanService } from './rate-plan.service';

@Controller('rate-plan')
export class RatePlanController {
  constructor(private readonly ratePlanService: RatePlanService) {}
  @Post()
  async saveRatePlan(@Body() saveRatePlanDto) {
  return this.ratePlanService.saveRatePlan(saveRatePlanDto);
}
}
