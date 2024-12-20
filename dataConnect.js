const mongoose = require('mongoose');
require('dotenv').config();
const url = 'mongodb+srv://vinay:vinaypatel@cluster0.rly1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connectTomongo = async () => {
    try {
        await mongoose.connect(`${url}`,{
         });
         console.log("We are connected to the MongoDB Server");
    } catch (error) {
       console.log("Something error while connecting to the databse")
    }
}

module.exports = connectTomongo;