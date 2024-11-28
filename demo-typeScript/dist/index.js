"use strict";
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
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["GUEST"] = "guest";
})(UserRole || (UserRole = {}));
const user1 = {
    name: "Pablo",
    email: "pablo@gmail.com",
    age: 35,
    active: true,
    address: {
        street: "Calle falsa 123",
        city: "Pilar",
    },
    role: UserRole.USER
};
console.log(user1);
