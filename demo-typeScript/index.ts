interface IAddress{
    street: string,
    city: string,
}

// interface IUser {
//     name: string,
//     email: string,
//     age: number,
//     active: boolean,
//     address: IAddress,
// }

// const usuario1: IUser = {
//     name: "Pablo",
//     email: "pablo@gmail.com",
//     age: 35,
//     active: true,
//     address: {
//         street: "Calle falsa 123",
//         city: "Pilar",
//     }
// }

enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

type TUser = {
    name: string,
    email: string,
    age: number,
    active: boolean,
    address: IAddress,
    role: UserRole // "admin","user","guest"
}

const user1: TUser = {
    name: "Pablo",
    email: "pablo@gmail.com",
    age: 35,
    active: true,
    address: {
        street: "Calle falsa 123",
        city: "Pilar",
    },
    role: UserRole.USER
}

console.log(user1);
