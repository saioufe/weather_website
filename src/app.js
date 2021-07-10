const path = require('path');
const express = require("express")
const hbs = require("hbs")
const geocode = require('./geocode')

const app = express()



// define path for express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// setup handlebar engine and views Locations
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "Main page",
        name: "saif maher"
    })
})

app.get("/products", (req, res) => {
    if (!req.query.search) {
        res.send({
            error: "you must provide a search key"
        })
    }
    console.log((req.query.rating))
    res.send({
        products: []
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        about: "this is about",
        title: "About page",
        name: "saif maher"
    })
})


app.get('/weather', (req, res) => {
    // if (!req.query.address) {
    //     res.send({
    //         error: "please provide an address"
    //     })
    // } else {
    //     geocode(req.query.address, (error, { temp } = {}) => {
    //         if (error) {
    //             res.send({
    //                 error: error
    //             })
    //         } else {
    //             res.send({
    //                 temp: temp
    //             })
    //         }

    //     })

    // }
    res.render('weather', {
        title: "Weather",
        name: "saif maher"
    })

})


app.get("/weather/*", (req, res) => {
    res.render('404.hbs', {
        errorMg: "404 ERROR ! , weather page not found"
    })
})

app.get("*", (req, res) => {
    res.render('404.hbs', {
        errorMg: "404 ERROR ! , page not found"
    })
})

app.listen(3000, () => {
    console.log("server is up !")
})