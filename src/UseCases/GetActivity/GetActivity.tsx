import { userSettingsApi } from "../../Api/FriendService/FriendService";
import { Activity } from "../../Models/Activity";
import { UserState } from "../../Models/UserState"

export async function GetActivies(): Promise<Array<Activity>> {

    return UserState.Instance()._currentUser.activities()

    try {

        //if (!UserState.Instance()._currentUser) {

        //    UserState.Instance()._currentUser = await userSettingsApi.fetchSettings()

        //}

        //return UserState.Instance()._currentUser.activities()

        return await userSettingsApi.fetchActivities()


    } catch (e) {

        console.error('E: GetActivities ' + e.toString())

        throw e

    }

}