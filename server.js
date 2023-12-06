const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;
const quotesRouter = express.Router();

app.use(express.static('public'));

app.use('/api/quotes',quotesRouter);

app.listen(PORT, ()=>{
    console.log("listening to the server...");
})