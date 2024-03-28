import {Injectable} from '@nestjs/common';
import {CrudSeries} from './crud-series.interface';
const baseUrl = "http://localhost:3030/series";

@Injectable()
export class CrudSeriesService{
    async getSeries(): Promise<CrudSeries[]>{
        const res= await fetch(baseUrl)
        const parsed = res.json()
        return parsed;
    }
    async getSeriesById(id:number):Promise<CrudSeries>{
        const res = await fetch(baseUrl+id);
        const parsed = await res.json();
        return parsed;
    }
    async createSeries(series: CrudSeries): Promise<CrudSeries>{
        const id = await this.setId();
        const {titulo, genero, estreno, calificacion, sinopsis, reparto} = series;
        const newSeries = {id, titulo, genero, estreno, calificacion, sinopsis, reparto};
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content- Type': 'application/json',
            },
            body: JSON.stringify(newSeries),
        });
        const parsed = res.json()
        return parsed;
    }
    private async setId(): Promise<number>{
        const series = await this.getSeries();
        const id = series.pop().id + 1;
        return id;
    }
    async deleteSeriesById(id:number){
        const res = await fetch(baseUrl+id,{
            method: 'DELETE', 
        });
        const parsed = res.json();
        return parsed;
    }
    async actualizarSeriesById(id:number, body:CrudSeries):Promise<void>{
        const isSeries = await this.getSeriesById(id);
        if(!Object.keys(isSeries).length) return;
        const actualizarSeries = {...body,id};
        const res = await fetch(baseUrl + id,{
            method: 'PUT',
            headers: {
                'Content- Type': 'application/json',
            },
            body: JSON.stringify(actualizarSeries),
        });
        const parsed = await res.json();
        return parsed;
    }
}