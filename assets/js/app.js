const url = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async (url) => {
    try {
        // La API fetch de js permite hacer request http y recibir responses
        const res = await fetch(url);

        // Al ser una promesa lo que se recibe por fetch, se puede convertir el resultado en json
        const data = await res.json();

        console.log(data);
    } 
    catch (error) {
        console.log(error);
    }
};

fetchData(url);

// Resto del flujo de ejecución
console.log('Continúa el programa');