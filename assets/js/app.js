// Declaración de un objeto
const usuario = {
    nombre: "Manuel",
    apellido: "Henriquez",
    edad: 31,
    mascotas: ['Perro', 'Gato', 'Conejo']
}; 

// Accediento a las propiedades del objeto
let data = `Hola, mi nombre es ${usuario.nombre} ${usuario.apellido} y mi edad es ${usuario.edad}`;

console.log(data);

// Asignando una propiedad nueva al objeto dinámicamente
usuario.id = '0000000001';

// Reasignando el valor de la propiedad nombre
usuario.nombre = "Manuel A.";

// Imprimir el objeto
console.log(usuario);