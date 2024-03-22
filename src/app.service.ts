import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService{
  getHello(): string{
    return '¡Buenas gente!';
  }

  getDespedida(): string{
    return '¡Adios gente!';
  }

  getPersona(): Object{
    return {name: 'Angela', edad: 21};
  }
}