const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')


//Creating the object for Express
const app = express()

//Calling the Middleware
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

const db = require('./config/keys').mongoURI
mongoose.connect(db, {useNewUrlParser:true}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
})

app.get('/',(req, res) =>{
    return res.send('<h1>Welcome to MEVN Ryan</h1>')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})
