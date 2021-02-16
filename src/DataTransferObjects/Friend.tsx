import {User, UserProps} from "./interfaces/User";

export class Friend extends User {
    public static create({username, distance, activities}: UserProps) {
        return new Friend({username, distance, activities})
    }

    constructor({username, distance, activities}: UserProps) {
        super({username, distance, activities})
    }

    public toJSON(): UserProps{
        return super.toJSON()
    }
}