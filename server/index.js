const express = require('express') //object
const route = require('./route')
var cors = require('cors')
const app = express()//object
const port = 3000//variable
app.use(cors())
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());//to handle json req and res (middleware)
app.use('/',route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
