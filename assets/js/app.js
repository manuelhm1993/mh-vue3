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
        setTimeout(() => (true) ? resolve(data) : reject('Error. No se pudo acceder a la data'), 2000);
    });
};

// Simulación de fetch: async indica que la función es asíncrona
(async () => {
    // Se usa try-catch para manejar los errores
    try {
        // Se usa await para recuperar el valor de la promesa una vez resuelta
        const res = await getData();

        // Se imprime el valor
        console.log(res);
    } 
    catch (error) {
        // Se imprime el error
        console.log(error);
    }
})(); // Función anónima auto-invocada - IIFE - Expresión de función ejecutada inmediatamente

// Resto del flujo de ejecución
console.log('Continúa el programa');