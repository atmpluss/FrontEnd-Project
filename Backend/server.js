const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '1',
            username: "test",
            email:"test@test.de",
            password:"test"
        },
        {
            id: '2',
            username: "admin",
            email:"admin@gmail.com",
            password:"admin"
        }
    ]
}
app.get("/", (req, res)=>{
    res.send(database.users)
})

app.post("/login", (req, res)=>{
    if(req.body.email=== database.users[1].email && req.body.password === database.users[1].password){
        res.status(200).json("success")
    }else{
        res.status(200).json("error logging in...")
    }
})

app.listen(3002, ()=>{
    console.log("app is running on port 3002...");
})