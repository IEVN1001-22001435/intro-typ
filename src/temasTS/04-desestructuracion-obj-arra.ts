interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
interface Detalles{
    autor: string;
    anio: number;
}
const reproductor:Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: 'Gnarly',
    detalles:{
        autor: 'KATSEYE',
        anio: 2025,
    }
};

console.log('El volumen actual es:', reproductor.volumen);
console.log('El segundo actual es:', reproductor.segundo);
console.log('La canción actual es:', reproductor.cancion);
console.log('El autor es:', reproductor.detalles.autor);

//desestructuracion de objetos
const {volumen, segundo, cancion, detalles}=reproductor;
const {autor, anio}=detalles;
console.log('El volumen actual es:', volumen);
console.log('El segundo actual es:', segundo);
console.log('La canción actual es:', cancion);
console.log('El autor es:', autor);
console.log('El año de lanzamiento:', anio);


//desestructuración de arreglo
const dbz:string[]=['PinkyPie, Dora, Barnie'];
const[p1, p2, p3]=dbz;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

const [,,p4]=dbz;
console.log('Personaje 4: ', p4)
//doble coma están simulando el espacio entre elementos