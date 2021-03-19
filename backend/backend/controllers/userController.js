const userDatabaseDriver = require('../db/drivers/userDatabaseDriver.js')()
const {setLoginCookies, setLogoutCookies} = require('../middlewares/auth')

function UserController() {
    if (!(this instanceof UserController)) {
        return new UserController()
    }
}

UserController.prototype.register = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        res.status(401).send("Username and password required!")
        return
    }

    try {
        const success = await userDatabaseDriver.insert(username, password)
        if (!success) {
            res.status(401).send("Username already exists!")
            return
        }

        res.status(200).send('User successfully registered!')
    } catch (err) {
        res.status(500).send('Internal error!')
    }
}

UserController.prototype.login = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        res.status(401).send("Username and password required!")
        return
    }

    try {
        const user = await userDatabaseDriver.findUser(username, password)

        if (user === undefined) {
            res.status(401).send("Invalid credentials!")
            return
        }

        const {accessToken, refreshToken} = user.createTokens()

        setLoginCookies(res, accessToken, refreshToken)
        res.status(200).send({userId: user.id})
    } catch (err) {
        res.status(401).send("Internal error!")
    }
}

UserController.prototype.logout = async (req, res) => {
    setLogoutCookies(res)
    res.status(200).send('')
}

UserController.prototype.getUsersInfo = async (req, res) => {
    try {
        const user = await userDatabaseDriver.findUserById(req.userId)

        if (user === undefined) {
            res.status(400).send("Unable to find user!")
            return
        }

        res.status(200).send({username: user.username})
    } catch (err) {
        res.status(500).send("Internal error!")
    }
}

module.exports = UserController