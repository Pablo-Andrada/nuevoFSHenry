import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name:"users"
})//users
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length:100
    })
    name: string //VARCHAR (100)
    
    @Column()
    email: string
    
    @Column("integer")
    age:number
    
    @Column()
    active: boolean
}




