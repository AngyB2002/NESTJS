import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksManagerController } from './tracks-manager/tracks-manager.controller';
import { TracksManagerService } from './tracks-manager/tracks-manager.service';
import { GetIndividualController } from './get-individual/get-individual.controller';
import { GetIndividualService } from './get-individual/get-individual.service';

@Module({
  imports: [],
  controllers: [AppController, TracksManagerController, GetIndividualController],
  providers: [AppService, TracksManagerService, GetIndividualService],
})
export class AppModule {}