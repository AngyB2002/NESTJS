import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksManagerController } from './tracks-manager/tracks-manager.controller';
import { TracksManagerService } from './tracks-manager/tracks-manager.service';

@Module({
  imports: [],
  controllers: [AppController, TracksManagerController],
  providers: [AppService, TracksManagerService],
})
export class AppModule {}