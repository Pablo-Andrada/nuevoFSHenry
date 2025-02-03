const axios = require('axios');

const promise = axios.get('https://jsonplaceholder.typicode.com/users');

promise
    .then((res) => {
        console.log(res.data);        
    })
    .catch((err) => {
        console.log(err);        
    })