import {User, UserProps} from "./Interfaces/User";

export class Friend extends User {

    protected _phoneNumber: string
    protected _bio: string
    constructor({username, distance, activities, averageReviewScore, phoneNumber, bio}: UserProps & {phoneNumber: string, bio: string}) {
        super({username, distance, activities, averageReviewScore: averageReviewScore})
        this._phoneNumber = phoneNumber

        if (!bio) bio = "I Love Sports"

        this._bio = bio
    }

    public toJSON(): UserProps{
        return super.toJSON()
    }

    public bio() : string { return this._bio }

    public phoneNumber() : string {
        return this._phoneNumber
    }
}