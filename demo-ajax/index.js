const addUserButton = document.getElementById("addUserButton");
let i = 1;

class User{
    constructor(id, name,username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}


class Repository {
    constructor(){
        this.users = []
    }

    createUser({id, name,username, email}) {
        const newUser = new User(id, name, username, email);
        this.users.push(newUser);
    }
}

const newRepository = new Repository();

const refresh = () => {
    const usersContaniers = document.getElementById("usersContaniers");
    usersContaniers.innerHTML = "";

    const users = newRepository.users;

    const htmlUsers = users.map((user) => {
        const name = document.createElement("h3");
        const email = document.createElement("p");

        name.innerHTML = user.name;
        email.innerHTML = user.email;

        const card = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);

        return card;
    });

    htmlUsers.forEach((card) => {
        usersContaniers.appendChild(card);
    })
}


const addUser = () => {
    if (i>10) {
        alert("No hay mas usuarios!")
    } else {
        $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data,status) => {
            newRepository.createUser(data)               
            i++;
            refresh();
            
        })
    }

}

addUserButton.addEventListener("click", addUser);