import {Controller, Body, Get, Param, Post, Delete, Put} from '@nestjs/common';
import { CrudSeriesService } from './crud-series.service';
import { CrudSeries } from './crud-series.interface';

@Controller('series')
export class CrudSeriesController {
    constructor(private readonly crudSeriesService: CrudSeriesService){}
    @Get()
    getSeries() : Promise<CrudSeries[]>{
        return this.crudSeriesService.getSeries()
    } //muestra todos los productos
    @Get('/:id')
    getSeriesById(@Param('id') id: number): Promise<CrudSeries>{
        return this.crudSeriesService.getSeriesById(id);
    } //muestra un producto
    @Post()
    createSeries(@Body() body): Promise<CrudSeries>{
        return this.crudSeriesService.createSeries(body)
    }//crea un procucto nuevo
    @Delete('/:id')
    deleteSeriesById(@Param('id') id:number): Promise<void>{
        return this.crudSeriesService.deleteSeriesById(id)
    }//elimina un producto
    @Put(':id')
    actualizarSeriesById(@Param('id') id: number, @Body() body): Promise<void>{
        return this.crudSeriesService.actualizarSeriesById(id, body);
    }//edita y actualiza un id ya existente que elijas
}