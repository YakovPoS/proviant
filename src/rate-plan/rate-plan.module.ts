import { Module } from '@nestjs/common';
import { RatePlanService } from './rate-plan.service';
import { RatePlanController } from './rate-plan.controller';

@Module({
  controllers: [RatePlanController],
  providers: [RatePlanService]
})
export class RatePlanModule {}
