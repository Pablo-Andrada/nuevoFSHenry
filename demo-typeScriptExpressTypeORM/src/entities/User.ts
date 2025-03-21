import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"
import { Vehicle } from "./Vehicle"

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

    @OneToOne(() => Vehicle)
    @JoinColumn()
    vehicle: Vehicle
}




