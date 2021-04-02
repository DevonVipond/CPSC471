var router = require('express').Router()
const {verify} = require('../../middlewares/auth')
const { getSettingsPage, setSettings } = require('./controller')
const { isAdmin } = require('../adminPage/controller')

const userProtectedRoute = async (req, res, next) => {
    try {
        const username = req.username
        const isUserAdmin = await isAdmin(username)
        if (isUserAdmin) {
            unauthorized(res)
            return
        }

        next()
    } catch (e) {
        internalError(res, e.toString())
    }
}

router.get('/settings', verify, userProtectedRoute, getSettingsPage)
router.post('/settings', verify, userProtectedRoute, setSettings)

module.exports = router