const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.get('/shop/alldata', (req, res) => {
    let data = [{
        productImage: "images/product-3.png",
        productName: "hello",
        productPrice: "100",
    }, {
        productImage: "images/product-1.png",
        productName: "Nordic Chair",
        productPrice: "$50.00",
    }, {
        productImage: "images/product-2.png",
        productName: "Kruzo Aero Chair",
        productPrice: "$78.00",
    }, {
        productImage: "images/product-3.png",
        productName: "Ergonomic Chair",
        productPrice: "$43.00",
    }, {
        productImage: "images/product-3.png",
        productName: "Nordic Chair",
        productPrice: "$50.00",
    }, {
        productImage: "images/product-1.png",
        productName: "Nordic Chair",
        productPrice: "$50.00",
    }, {
        productImage: "images/product-2.png",
        productName: "Kruzo Aero Chair",
        productPrice: "$78.00",
    }, {
        productImage: "images/product-3.png",
        productName: "Ergonomic Chair",
        productPrice: "$43.00",
    }]
    res.json({ data: data })
})

app.get('/about/teams', (req, res) => {
    let data = [{ image: "images/person_1.jpg", name: "Lawson Arnold", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov", more: "Learn More" }, { image: "images/person_2.jpg", name: "Jeremy Walker ", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov", more: "Learn More" }, { image: "images/person_3.jpg", name: "Patrik White", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov", more: "Learn More" }, { image: "images/person_4.jpg", name: "Kathryn Ryan", postion: "CEO, Founder, Atty", description: " Separated they live in. Separated they live in Bookmarksgrov", more: "Learn More" }]
    res.json({ data: data })
})

app.post('/contact/insert', (req, res) => {
    let data = req.body;
    console.log(data);    
    //sql query or mongodb query
    res.json({ data: "", message: "Data inserted successfully" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})