export class Contacto{
    nombre='';
    apellido='';
    email='';
    telefono=0;
    conectado=true;

    constructor(nombre,apellido,email,telefono,conectado){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.telefono=telefono;
        this.conectado=conectado;
    }


}