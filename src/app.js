require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const { init: initHadlebars } = require("./helpers/hadlebars");

const express = require("express");

const app = express();

initHadlebars(app);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, "assets")))

console.log(app.locals);


app.use('/', require('./routes/site'));
app.use('/post', require('./routes/post'));


// app.get('/', Home.index);

// app.get('/login', Login.store);

app.listen(process.env.PORT || 3000);



































// app.use('/signup', function(req, res, next){
//     return res.json('middlware');
// });
// app.post('/login', function(req, res, next){
//     return res.json('middlware login');
// }, Login.store);