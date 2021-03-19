import db from "../db/index"

// Returns all reported users where ReportedUsers.adminid == null
const getReportedUsers = async (req, res) => {

    const { adminId } = req.cookies

    const reports = await db.call('GET REPORTED USERS WITH ADMINID==NULL', adminId)// returns { reportedUsername, timesReported, reporterComments }
}

const resolveReport = async (req, res) => {

    const { adminId } = req.cookies
    const { reportedId ,admin_comments } = req.body

    await db.call('RESOLVE REPORT', adminId, reportedId, admin_comments)
}

const deleteUser = async (req, res) => {

    const { adminId } = req.cookies
    const { username, reportedId } = req.body

    await db.call('DELETE USER', adminId, username, reportedId)
}

const reportFriend = async (req, res) => {

    const { userId } = req.cookies
    const { friendUsername, message } = req.body

    await db.call('REPORT FRIEND', userId, friendUsername, message) // THIS WILL DELETE THE FRIEND 
}

export default { getReportedUsers, resolveReport, deleteUser, reportFriend }