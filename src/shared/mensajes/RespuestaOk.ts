import { Respuesta } from 'src/shared/mensajes/Respuesta';

export class RespuestaOk extends Respuesta{
    constructor(respuesta: Object, mensaje: string, codigo?: number){
        super(respuesta, mensaje, codigo);
    }
}