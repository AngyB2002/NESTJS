import { Controller, Get } from '@nestjs/common';
import { TracksManagerService, iTrack} from './tracks-manager.service';

@Controller('/tracks')
export class TracksManagerController{
  constructor(private readonly tracksManagerService: TracksManagerService) {}

@Get()
getTracks(): iTrack[]{
  return this.tracksManagerService.getTracks();
  }
}