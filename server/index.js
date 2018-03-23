const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const addrCtrl = require('./controllers/address')

const app = express() // backend WEB framework for CRUD (create, read, update, delete) routes 

app.use(bodyParser.json()); // body-parser is a middleware that gets the entire body of a http request and exposes it on req.body, also parses the info and makes it easier to deal with.
app.use(cors()); // idk what this shit does i just have it cuz sometimes stuff breaks if you don't. i think its something to do with making your http requests more secure.

// 'endpoints' are urls that you hit in the back end. they will build off of your port/domain.
// if you wanted to hit your endpoint in postman the full URL would be: http://localhost:3001/api/create_address

// '/api/get_address/:addressID' -> the : indicates a parameter AKA a required value. request will fail if you don't fillout the parameter.
// when you make a request to that url with param, it would look something like this:
// http://localhost:3001/api/get_address/address_id_293394567542

app.post('/api/create_address', addrCtrl.createAddress); // 'post' indicates that we are creating something.
app.get('/api/get_address/:addressID', addrCtrl.getAddress);  // 'get' indicates that we are retreiving something.


const PORT = 3005; // you can change this to whatever port you want your server to run on.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)) // the port that will listen for requests. i console log here so i know my server is actually running.