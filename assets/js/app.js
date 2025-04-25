// Declaración de un objeto
const usuario = {
    nombre: "Manuel",
    apellido: "Henriquez",
    edad: 31,
    mascotas: ['Perro', 'Gato', 'Conejo']
}; 

// Destructuración de objetos
const { nombre, apellido, edad, mascotas } = usuario;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(mascotas);

// El objeto no pierde sus propiedades al destructurar, simplemente copia sus propiedades en variables
console.log(usuario);