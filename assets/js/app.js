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
const getData = () => setTimeout(() => data, 2000);

const response = getData();

console.log(response);