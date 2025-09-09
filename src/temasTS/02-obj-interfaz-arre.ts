interface Alumno{
    nombre: string;
    edad: number;
    curso: string;
    email?: string;
    nota: number | string;
}


const alumno:Alumno={
    nombre: "Arely",
    edad: 22,
    curso:"TypeScript",
    email:"arelytorres.com",
    nota: 9
}

console.log(`El alumno ${alumno.nombre}
    tiene ${alumno.edad} años y su nota es ${alumno.nota}`);

let mascotas:string[]=['Perro', 'Gato', 'Hámster'];
mascotas[1]='Pájaro';
mascotas.push('Tortuga');
console.log(mascotas);

let notas:(number|string)[]=[7, 8, 9, 'Aprobado'];
notas.push(10);
notas.push('Sobresaliente');
console.log(notas);