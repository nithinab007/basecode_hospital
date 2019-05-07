const express=require('express');
const chalk=require('chalk');
const path=require('path')
var mongodb= require('mongodb');
const bodyParser = require("body-parser");

const MongoClient = require('mongodb').MongoClient
portno=2004
var app=new express();
app.use(express.static(path.join('./public')))
app.set('views','./src/views');
app.set('view engine','ejs');

const nav=[
    
    {link:'/specialities',title:'Specialities'},
    {link:'/quickcontact',title:'Quickcontact'},
    {link:'/appointment',title:'Appointment'}


]


MongoClient.connect('mongodb+srv://dbuser:mypassword@cluster0-rvngw.mongodb.net/test', (err, client) => {
    if (err) {
        console.log("Database Connection Error")
    }
    else {
        db = client.db('mydb')
        console.log("Database Connection Successful");
        app.listen(portno, function () {
            console.log("Listening to", portno);
        })
    }
})


app.get('/', (req, res) => {
    var cursor = db.collection('register').find().toArray(function (err, results) {
    console.log(results)
    
    res.render('index',{title:"Hospital",nav })
})
});


app.use(bodyParser.urlencoded({ extended: true }))
app.post('/register', (req, res) => {
    db.collection('register').insertOne(req.body, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Data saved to db')
            res.redirect('/')
        }
    })
    console.log(req.log)
})




const spcRouter=require('./src/routes/specialitiesRoutes')(nav);
const quickcontactRouter=require('./src/routes/quickcontactRoutes')(nav);


app.get('/appointment',function(req,res)
{
    // res.sendFile(path.join(__dirname,"views/index.htm"));
    res.render('appointment',{title:"appointment"
    
})
});








app.use('/specialities',spcRouter);

app.use('/quickcontact',quickcontactRouter);

    

