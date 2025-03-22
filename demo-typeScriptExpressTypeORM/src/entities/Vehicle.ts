import { Column, Entity, PrimaryGeneratedColumn,ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({
    name: "vehicles"
})
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    brand: string;
    
    @Column()
    color: string;
    
    @Column()
    model: string;

    @Column()
    year: number;

    @ManyToOne(() => User, (user) => user.vehicles)
    user: User
}