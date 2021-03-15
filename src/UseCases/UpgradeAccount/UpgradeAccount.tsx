import { userSettingsApi } from "../../Api/FriendService/FriendService";


export async function UpgradeAccount(): Promise<void> {

    try {

        await userSettingsApi.upgradeToPremium()

    } catch (e) {

        console.error('E: AddActivity ' + e.toString())

        throw e

    }

}

