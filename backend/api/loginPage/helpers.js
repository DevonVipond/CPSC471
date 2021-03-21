const jwt = require('jsonwebtoken')
const nodeGeo = require('node-geocoder');

const geo = nodeGeo({
  provider: 'google',
  httpAdapter: 'https', 
  apiKey: process.env.GOOGLE_API_KEY,
  formatter: 'json' 
});


function createTokens (username) {
    try {
        const accessToken = jwt.sign({id: username}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_LIFE})
        const refreshToken = jwt.sign({id: username}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: process.env.REFRESH_TOKEN_LIFE})

        return {accessToken, refreshToken}
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function convertGPSToCity(longitude, latitude) {

    const getCity = new Promise((resolve, reject) => {
        geo.reverse({lat: latitude, lon: longitude}, function(err, res) {
            if (err) {
                console.error('getCity->' + err)
                return reject(err)
            }
            console.log(res);
            return resolve(res)
        });
    })

    try {
        return await getCity

    } catch (e) {
        console.log('convertGPSToCity -> ' + e)
        throw e
    }
}

function makeUserFromDb(rows) {

    const { username, password } = rows[0]

    return { username, password }
}

module.exports = {createTokens, convertGPSToCity, makeUserFromDb}