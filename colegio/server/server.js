// const express = require("express");
// const app = express();
// const cors = require('cors')
// app.use(cors())

// // This will fire our mongoose.connect statement to initialize our database connection
// require("./config/mongoose.config");

// app.use(express.json(), express.urlencoded({ extended: true }));

// // This is where we import the users routes function from our user.routes.js file
// const AllMyApiRoutes = require("./routes/api.routes")
// AllMyApiRoutes(app);

// app.listen(8000, () => console.log(`The server is all fired up on port 8000`));


const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
 
//Connect Mongo Atlas
//require('./server/config/connectMongo')();

require('./config/mongoose.config')
 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/api.routes')(app); 

 
app.listen(8000, () => {
    console.log("Servidor Conectado")
})

