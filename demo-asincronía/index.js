const axios = require('axios');

const promise = axios.get('https://jsonplaceholder.typicode.com/users');

promise
    .then((res) => {
        console.log(res.data);        
    })
    .catch((err) => {
        console.log(err);        
    })

// Función asíncrona para obtener datos de una API
async function obtenerDatos() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // Verificar si la respuesta fue exitosa
        if (!respuesta.ok) {
            throw new Error(`Error en la respuesta: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        console.log('Datos obtenidos:', datos);
    } catch (error) {
        console.error('Ocurrió un error:', error.message);
    }
}

// Llamada a la función
obtenerDatos();
