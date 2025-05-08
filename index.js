// import express
const exspress = require('express')


// import CORS
const cors = require('cors')

// import bodyParser
const bodyParser = require('body-parser')

// import router 
const router = require('./routes')

// init app
const app = exspress()


// use cors
app.use(cors())

// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// define port
const port = 3000 ;

// route
app.get('/', (req, res) => {
    res.send('Hello World')
})

// define route
app.use('/api', router);

// start server
app.listen(port, () => console.log(`Server Started on port ${port}`))