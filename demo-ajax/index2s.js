const addUserButton = document.getElementById('addUserButton');

let i = 1;

$.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data,status) => {
    console.log(data);
    i++;
})