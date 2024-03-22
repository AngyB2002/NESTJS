export class Respuesta {
    private mensaje: string;
    private codigo: number;
    private respuesta: Object;
    
    constructor(respuesta: Object, mensaje: string, codigo?: number){
        this.respuesta = respuesta;
        this.mensaje = mensaje;
        this.codigo = codigo;
    }
    
    public getMensaje(): string{
        return this.mensaje;
    }
    
    public getCodigo(): number{
        return this.codigo;
    }
    
    public getRespuesta(): Object{
        return this.respuesta;
    }
};