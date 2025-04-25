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
        // Resolve indica que la promesa a concluido su ejecución
        setTimeout(() => resolve(data), 2000);
    });
};

const response = getData();

// Recuperar el valor de la promesa esperando que retorne su ejecución
response.then(data => console.log(data));

// Resto del flujo de ejecución
console.log('Continúa el programa');