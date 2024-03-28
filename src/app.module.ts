import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksManagerController } from './tracks-manager/tracks-manager.controller';
import { TracksManagerService } from './tracks-manager/tracks-manager.service';
import { GetIndividualController } from './get-individual/get-individual.controller';
import { GetIndividualService } from './get-individual/get-individual.service';
import { TracksController } from './tracks/tracks.controller';
import { TracksService } from './tracks/tracks.service';

@Module({
  imports: [],
  controllers: [AppController, TracksManagerController, GetIndividualController, TracksController],
  providers: [AppService, TracksManagerService, GetIndividualService, TracksService],
})
export class AppModule {}