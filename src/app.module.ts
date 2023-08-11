import { Module } from '@nestjs/common';
import { OpportunitiesModule } from './modules/opportunities/opportunities.module';

@Module({
  imports: [OpportunitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
