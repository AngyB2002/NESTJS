import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Respuesta } from '././shared/mensajes/Respuesta';
import { RespuestaOk } from '././shared/mensajes/RespuestaOk';
import { RespuestaError } from '././shared/mensajes/RespuestaError';

@Controller("api/")
export class AppController{
  constructor(private readonly appService: AppService) {}

  @Get() //localhost:3000/api
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("chau") //localhost:3000/api/chau
  getDespedida(): string {
    return this.appService.getDespedida();
  }

  @Get('admin/:error') //localhost:3000/api/admin/true - localhost:3000/api/admin/false
  admin(@Param('error') error: string): Respuesta{
    if (error === 'true'){
      return new RespuestaError('Se ha generado un error', HttpStatus.INTERNAL_SERVER_ERROR);
    } else{
      const obj: Object = this.appService.getPersona();
      return new RespuestaOk(obj, 'Objeto devuelto correctamente', HttpStatus.OK);
    }
  }
}