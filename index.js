const express = require('express');
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/swaggy')

let db = mongoose.connection;

const app = express();

// Check connection

db.once('open' , function (){
console.log("Connected to MongoDB - Swaggy Database")
});

// Check for DB errors

db.on('error' , function (err){
  console.log("err")
});


let Restaurant = require('./models/restaurant')


//
// // BODY Parse required Middle ware ( code from github)
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: false}));
// // parse application/json
// app.use(bodyParser.json());


// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json



//MiddleWare Needed for Body Parser

app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// }








app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');




app.get('/restaurants', function(req, res) {

	res.render('index.html')

})



app.post('/restaurants', function (req, res) {


  let restaurant = new Restaurant();

  restaurant.restaurantName = req.body.restaurantName;
  restaurant.phoneNumber = req.body.phoneNumber;


  restaurant.save(function(err) {

    if (err) {
      console.log(err)
    } else {
      res.send('New Restaurant Registered Bitchess !!');
    }
  })



})




app.listen(3000, function() {

  console.log('Server Started on port 3000')
})
