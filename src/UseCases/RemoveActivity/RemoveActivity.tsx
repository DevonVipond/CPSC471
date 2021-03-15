import { userSettingsApi } from "../../Api/FriendService/FriendService";
import { Activity } from "../../Models/Activity";
import { UserState } from "../../Models/UserState"

export async function RemoveActivity(activity: Activity): Promise<void> {

    console.log('RemoveActivity -> ' + activity.toJSON())
    UserState.Instance()._currentUser.removeActivity(activity)
    return;

    try {

        //if (UserState.Instance()._currentUser) {

        //    UserState.Instance()._currentUser.removeActivity(activity)

        //}

        await userSettingsApi.removeActivity(activity)


    } catch (e) {

        console.error('E: GetActivities ' + e.toString())

        throw e

    }

}