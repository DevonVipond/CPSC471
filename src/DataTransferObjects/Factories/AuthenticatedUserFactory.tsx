import AbstractUserFactory from "./AbstractUserFactory";
import {UserProps} from "../Interfaces/User";

type AuthenticatedUserFactoryProps = UserProps & { activities: Array<string>, accountType: string }
class AuthenticatedUserFactory extends AbstractUserFactory {
    constructor({}) {
        super();
    }

    //public make({ username, distance, activities, accountType }: AuthenticatedUserFactoryProps): RegularUser | PremiumUserModel {
    //    if (accountType === ACCOUNT_TYPES.REGULAR) {
    //        if (activities.length > 1) {
    //            throw new Error ('A regular user cannot have more than 1 activity! ' + activities)
    //        }

    //        return new RegularUser({ username, distance, activities })
    //    }

    //    return new PremiumUserModel({ username, distance, activities })
    //}
}
