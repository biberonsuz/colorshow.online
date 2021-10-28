const express = require("express")

// create an express app
const app = express()



// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
})


//passsing directoryPath and callback function

// start the server listening for requests
app.listen(process.env.PORT || 80, 
	() => console.log("Server is running..."))

