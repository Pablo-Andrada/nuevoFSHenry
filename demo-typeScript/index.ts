interface IUser {
    name: string,
    email: string,
    age: number
}

interface IAdminUser extends IUser{
    adminSince:Date,
}

interface IGuestUser extends IUser{
    active: boolean,
}

const user1: IAdminUser = {
    name: "Pablo",
    email: "pablo@gmail.com",
    age: 35,
    adminSince: new Date(),

}