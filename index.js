const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const app = express();

mongoose.connect("mongodb+srv://saimanikanta:Susheela333@cluster0.sxeujio.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err.message));

app.use(cors());
app.use(express.json());

app.use('/Gameproducts', productRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 12000;
app.listen(port, () => console.log(`server running at http://localhost:${port}`));