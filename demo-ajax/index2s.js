const addUserButton = document.getElementById('addUserButton');

let i = 1;

class User{
    constructor(id, name,username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}

class Repository{
    constructor() {
        this.users = [];    
    }
    createUser({id, name,username, email}) {
        const newUser = new User(id, name, username, email);
        this.users.push(newUser);
    }
}
const newRepository = new Repository();




const addUser = () => {
    if (i > 10) { return alert('No hay mas usuarios') }
    else {
        $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data,status) => {
            newRepository.createUser(data)
            i++;
            refresh();
        })        
    }
}


addUserButton.addEventListener('click',addUser)