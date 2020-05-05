// loading liabrary
const express = require('express');
const app =express();
const morgan = require('morgan');
const mysql = require('mysql');
const cors = require('cors');

// Using morgan to identify the user and what is being parsed/requested
app.use(morgan('combined'));

// using cors to convert the parse data
app.use(cors());

//  importing all data from the mysql database
const SELECT_ALL_TWEETS_QUERY = 'SELECT * FROM tweets';

// creating a connection between the database the server/app (connecting to mysql database)
const connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'root',
            port:8889,
            database: 'tweet',
        })
connection.connect(err => {
    if (err){
        return err
    }
})


// creating an api as the root menu
app.get("/",(req,res)=>{
    console.log("responsing to root")
    res.send("to to /tweets to see all tweets")
})

// creating an api that load all data from the database
app.get("/tweets",(req,res)=>{
    connection.query(SELECT_ALL_TWEETS_QUERY, (err,resuls) =>{
        if(err){
            return res.send(err)
        }else{
            return res.json({
                data:resuls
            })
        }
    })
})

// the local server
app.listen(3003,()=>{ 
    console.log("Servcer is running on port 3003")
})