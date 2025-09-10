import {calcularIVADos, type Producto} from "./05-desestructuracion-funciones";

const carrito:Producto[] = [
    {
        nombre: 'Iphone 14',
        precio: 15000
    },
    {
        nombre: 'Ipad Air',
        precio: 9500
    },
    {
        nombre: 'Macbook Pro',
        precio: 12000
    }
];

const[total, iva]=calcularIVADos(carrito);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${iva}`);