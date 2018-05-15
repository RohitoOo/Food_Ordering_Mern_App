const mongoose = require('mongoose');

//Restaurant Schema
const RestaurantSchema = mongoose.Schema({

restaurantName:{
  type: String,
  required: true
},
phoneNumber:{
  type: String,
  required: true
}
});

let Restaurant = module.exports = mongoose.model('Restaurant', RestaurantSchema);
