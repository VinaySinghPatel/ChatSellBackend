const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
    type : String
    },
    category: String,
    price: String,
    description: String,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;