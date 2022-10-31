const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('Web Studio API Running');
});

app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const getSingleItem = course?.find((c) => c.id == id);
    if(!getSingleItem){
        res.send("unavailable data")
    }
    res.send(getSingleItem)
});

app.listen(port, () => {
    console.log('Web studio Server running on port', port);
})