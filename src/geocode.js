const request = require("request")


const geocode = (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=4e1175ac83b99c87d8e0b5930d758514&query= " + encodeURIComponent(address) + " "


    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback("cant connect to the api", undefined)

        } else if (body.error) {
            callback("something went wrong", undefined)
        } else {
            callback(undefined, {
                temp: body.current.temperature,
            })
        }

    })
}

module.exports = geocode

