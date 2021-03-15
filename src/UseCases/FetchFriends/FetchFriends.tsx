import { friendApi } from "../../Api/FriendService/FriendService";
import { Friend } from "../../Models/Friend";

export async function FetchFriends(): Promise<Array<Friend>> {

    try {

        return await friendApi.fetchFriends()

    } catch (e) {

        console.error('E: AddActivity ' + e.toString())

        throw e

    }

}
