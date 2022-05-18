//boilerplate code

const express = require('express');
const path = require('path');

const app = express();

//Let's build the path to our front end files so heroku can access them
//__dirname represents the file path

//endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../client/index.html'))
})

console.log(__dirname);

/*
when heroku deploys our app, it will provide its own port number.
this port number is stored on process.env.port

if we are not deploying heroku (working on our local machine),
it will then default to port 4005 (can pick whatever port you want)
*/
const port = process.env.PORT|| 4005;

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})