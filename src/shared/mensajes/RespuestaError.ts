import { Respuesta } from 'src/shared/mensajes/Respuesta';

export class RespuestaError extends Respuesta{
    constructor(mensaje: string, codigo?: number){
        super(null, mensaje, codigo);
    }
}