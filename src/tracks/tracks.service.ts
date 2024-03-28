import { Injectable } from '@nestjs/common';
import { Tracks } from './tracks.interface';
const baseUrl = "http://localhost:3030/tracks";

@Injectable()
export class TracksService {
    async getTracks(): Promise<Tracks[]>{
        const res = await fetch(baseUrl)
        const parsed = res.json();
        return parsed;
    }
}