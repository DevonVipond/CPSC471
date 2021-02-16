import {User, UserProps} from "./interfaces/User";

export class Match extends User {
    public static create({username, distance, activities}: UserProps) {
        return new Match({username, distance, activities})
    }

    constructor({username, distance, activities}: UserProps) {
        super({username, distance, activities})
    }

    public toJSON(): UserProps{
        return super.toJSON()
    }
}