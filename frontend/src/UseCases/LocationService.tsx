class LocationService {

    async getCoordinates(): Promise<{latitude: any, longitude: any}> {

        try {
            const locationPromise: Promise<{latitude: any, longitude: any}> = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(function(position) {
                    let latitude = position.coords.latitude;
                    let longitude = position.coords.longitude;
                    resolve({latitude, longitude})
                });
            })

            return await locationPromise
            
        } catch (e: any) {
            console.log('LocationService -> ' + e.message) 
            throw e
        }

    }

}

const locationService = new LocationService()

export default locationService