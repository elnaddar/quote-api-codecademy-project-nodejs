const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;
const quotesRouter = express.Router();

app.use(express.static('public'));

quotesRouter.get("/random", (req, res, next)=>{
    const obj = {
        quote: getRandomElement(quotes)
    };
    res.send(obj);
});

quotesRouter.get("/", (req, res, next)=>{
    
    const query = req.query;

    const respond = {};
    if(Object.keys(query) == 0){
        respond.quotes = quotes;
    } else if('person' in query){
        respond.quotes = quotes.filter((obj)=>{
            return obj.person == query.person;
        });
    }
    res.send(respond);
});

app.use('/api/quotes',quotesRouter);

app.listen(PORT, ()=>{
    console.log("listening to the server...");
})