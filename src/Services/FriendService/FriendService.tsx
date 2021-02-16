class FriendService {
    constructor() { }

    fetchIncomingFriendships(): void {}
    fetchOutgoingFriendships(): void {}
    fetchFriendList(): void {}

    destroyFriendship(): void {}
    acceptIncomingFriendship(): void {}
    rejectIncomingFriendship(): void {}
    getFriendInfo(): void {}
}

const friendService: FriendService = Object.freeze(new FriendService())

export default friendService