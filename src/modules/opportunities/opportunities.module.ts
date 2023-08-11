import { Module } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { OpportunitiesController } from './opportunities.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OpportunitiesRepository } from 'src/repositories/opportunitiesRepository';
import { PrismaOpportunitiesRepository } from 'src/repositories/prisma/prismaOpportunitiesRepository';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Opportunities_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'opportunities',
            brokers: ['kafka:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [OpportunitiesController],
  providers: [
    OpportunitiesService,
    PrismaService,
    {
      provide: OpportunitiesRepository,
      useClass: PrismaOpportunitiesRepository,
    },
  ],
})
export class OpportunitiesModule {}
