const db = []

function convertGPSToCity(longitude, latitude) {

    // ...
    return city
}

const login = async (req, res) => {

    const { username, password, longitude, latitude } = req.body

    const city = convertGPSToCity(longitude, latitude)
    const loginSuccessful = await db.call('VERIFY USER LOGIN CREDENTIALS', username, password) 

    if (!loginSuccessful) {
        throw Error()
    }

    await db.call('ADD USERS LOCATION', longitude, latitude, city) // ENSURE THERE ARE NO MORE THAN 10 ENTRIES!!!

    res.status(200).send()

}

const adminLogin = async (req, res) => {

    const { username, password } = req.body

    await db.call('VERIFY ADMIN LOGIN CREDENTIALS', username, password) 

    res.status(200).send()

}

const register = async (req, res) => {

    const { username, password, gender, firstname, lastname, phonenumber, age, about, accountType, longitude, latitude} = req.body


    const is_successful = await db.call('REGISTER ', username, password, gender, firstname, lastname, phonenumber, age, about, accountType ) 

    if (!is_successful) throw Error()

    const city = convertGPSToCity(longitude, latitude)
    await db.call('ADD USERS LOCATION', longitude, latitude, city) // ENSURE THERE ARE NO MORE THAN 10 ENTRIES!!!
    res.status(200).send()

}