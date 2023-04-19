
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from "sequelize-typescript";

export interface UserInterface{
    id?: number | null
    firstname: string
    lastname: string
    email: string
    password: string
}

export type UserType = Omit<UserInterface, "id">

@Table(
    {
        tableName: "user",
        timestamps: true
    }
)
export default class User extends Model implements UserInterface{
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number
    
    @Column
    firstname!: string

    @Column
    lastname!: string;

    @Column
    email!: string;

    @Column
    password!: string;

}