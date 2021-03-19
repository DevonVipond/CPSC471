

const db = []

// INPUT { activityName: string, skillLevel: string }
const addActivity = async (req, res) => {

    const { userId } = req.cookies
    const { activityName, skillLevel } = req.body

    await db.call('ADD ACTIVITY', userId, activityName, skillLevel) 

    res.status(200).send()

}

// INPUT { activityName: string }
const removeActivity = async (req, res) => {

    const { userId } = req.cookies
    const { activityName } = req.body

    await db.call('REMOVE ACTIVITY', userId, activityName) 

    res.status(200).send()
}

// INPUT { distance: number }
const setDistance = async (req, res) => {

    const { userId } = req.cookies
    const { distance } = req.body

    await db.call('SET DISTANCE', userId, distance) 

    res.status(200).send()
}

const getSettingsPage = (req, res) => {

    const { userId } = req.cookies

    const distance =   await db.call('GET DISTANCE', userId) 
    const activities = await db.call('GET ACTIVITIES', userId) 

    const distanceJSON = convertToJSON(distance)
    const activitiesJSON = convertToJSON(activities)

    res.status(200).send(distanceJSON + activitiesJSON)
}