class UserService {
    constructor() { }

    fetchAuthenticatedUserInfo(): void {}
    login(): void {}
    logout(): void {}
    register(): void {}
}

const userService: UserService = Object.freeze(new UserService())

export default userService