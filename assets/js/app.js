// Simulación de consulta a una API
const data = [
    {
        id: 1,
        name: "Manuel",
        age: 31
    },
    {
        id: 2,
        name: "Luna",
        age: 27
    },
    {
        id: 3,
        name: "Paola",
        age: 30
    }
];

// Obtener los resultados de forma asíncrona
const getData = () => {
    // Las promesas esperan a que termine el proceso para luego ejecutar una acción
    return new Promise((resolve, reject) => {
        // Resolve indica que la promesa a concluido su ejecución y reject indica que ocurrió un error
        setTimeout(() => (!true) ? resolve(data) : reject('Error. No se pudo acceder a la data'), 2000);
    });
};

// Recuperar la data en una promesa
const response = getData();

// El método then permite recuperar el valor de la promesa y catch captura una excepción
response.then(data => console.log(data)).catch(e => console.log(e));

// Resto del flujo de ejecución
console.log('Continúa el programa');