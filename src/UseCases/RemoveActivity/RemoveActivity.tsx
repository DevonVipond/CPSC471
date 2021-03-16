import { api } from "../../Api/Api";
import { userSettingsApi } from "../../Api/FriendService/FriendService";
import { Activity } from "../../Models/Activity";
import { UserState } from "../../Models/UserState"

export async function RemoveActivity(activity: Activity): Promise<void> {


    try {

        //if (UserState.Instance()._currentUser) {

        //    UserState.Instance()._currentUser.removeActivity(activity)

        //}

        await api.post('/activities', activity.toJSON())


    } catch (e) {

        console.log('RemoveActivity -> ' + activity.toJSON())
        UserState.Instance()._currentUser.removeActivity(activity)
        return;

        console.error('E: GetActivities ' + e.toString())

        throw e

    }

}