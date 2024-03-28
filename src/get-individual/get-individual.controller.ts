import { Controller, Get, Param } from '@nestjs/common';
import { GetIndividualService, iTrack } from './get-individual.service';

@Controller('/api/track')
export class GetIndividualController{
    constructor(private readonly getIndividualService: GetIndividualService) {}

    @Get()
    getTraks(): iTrack []{
        return this.getIndividualService.getTracks();
    }

    @Get('/:id')
    getTrackById(@Param('id') id: number): iTrack{
        return this.getIndividualService.getTrackById(id);
    }
}