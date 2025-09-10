class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
const persona1 = new Persona('', 0);
persona1.nombre = 'Arely';
persona1.edad = 22;
persona1.imprimir();
const persona2 = new Persona();



