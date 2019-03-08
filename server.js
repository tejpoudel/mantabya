const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser Middleware 
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//DB Config
//const db = require('./config/key').mongoURI;

//Connect to Mongo 
// mongoose
// .connect(db)
// .then(() => console.log('MongoDB Connected.....'))
// .catch(err => console.log(err));

// Connect to Mongoose
mongoose.connect('mongodb://localhost/Mantabya-DB')
.then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));

//Index Route
app.get("/", (req, res) => {
    res.render('index');
});


const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
