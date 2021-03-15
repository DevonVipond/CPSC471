import { Activity } from "./Activity";
import { PremiumUser } from "./PremiumUser";
import { RegularUser } from "./RegularUser";

export class UserState {

    private static instance: UserState;
    public _currentUser: PremiumUser | RegularUser 

    constructor() {
        if (UserState.instance) {
            throw new Error("Error - use UserState.getInstance()");
        }

        const username: string = 'Zeus'
        const distance: string = '10'
        const activities: Array<Activity> = [
            new Activity({name: Activity.ActivityNames.SOCCER, skillLevel: 'beginner'}),
            new Activity({name: Activity.ActivityNames.FOOTBALL, skillLevel: 'advanced'}),
        ]

        this._currentUser = new PremiumUser({username, distance, activities})
    }

    static Instance(): UserState {
        UserState.instance = UserState.instance || new UserState();
        const a = UserState.instance._currentUser.activities().length
        console.log('UserState-> current user activites: ' + a)
        return UserState.instance;
    }

}