const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dbConnects = require('./mongodbs');
const Insertdata = require('./insert');
const Readdata = require('./read');

const main=async ()=>{
    let data=await dbConnects();
    // data=await data.find().toArray();
    
}

main().catch(console.error);

const app=express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/signup', (req, res) => {
Insertdata(req.body);
res.status(200).send(req.body)
});

app.post('/login', (req, res) => {
    const dd=Readdata(req.body);
    dd.then(function(result) {
        res.status(200).send(result)
     })
});
app.post('/userdetails', (req, res) => {
    const ddr=Readdata(req.body);
    ddr.then(function(result) {
        res.status(200).send(result)
     })
});

app.listen(5001,'0.0.0.0',()=>{
    console.log("Server is running port 5001");
})