const connectTomongo = require('./dataConnect');
require('dotenv').config();
const express = require('express')
const cors = require('cors');
connectTomongo();

const app = express()
const port = 3001;


const allowedOrigins = [
  'http://localhost:3000',
  'https://67564946d8f04f4373e76ea3--deft-semifreddo-592c5a.netlify.app' 
 
];

app.use(cors());



app.use(express.json());

app.use('/api/product',require('./routes/product'));
app.use('/api/chat',require('./routes/chat'));
app.use('/api/User',require('./routes/User'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})