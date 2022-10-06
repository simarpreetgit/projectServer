const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const ProductSchema  = new Schema({

  name :String,
  image :String,
  description : String,
  price:Number,
  amount :Number,
  products : { type : String,enum :['Burger','Pizza','Drinks','Salad','Soup']}

});

  module.exports = model('Product', ProductSchema);