# ExpressMongooseExample
An attempted example of a professional grade simple crud app with express and mongoose

Steps to create a express mongoose project
1. Set up Github repo
2. Set Github remote to file directory, "git remote add origin" {URL}
3. Install express, mongoose, body-parser, cors, "npm install express mongoose body-parser cors"
4. Add following code to create basic express app with added packages.
    const express = require('express');
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const app = express();

    app.use(cors())
    app.use(bodyParser.urlencoded({extended: false}))

    app.get("/", function(req, res) {
        res.send('Hello Express');
    })

    // req and res are objects so you can add more key value pairs on them, like time being added to req.
    app.get('/now', function(req, res, next) {
        req.time = new Date().toString() 
        next();
    }, function(req, res) {
        res.send({time: req.time});
    })

    // This is send back what ever text is before "/echo".
    app.get("/:word/echo", function(req, res) {
        res.send({echo: req.params.word});
    })

    //app.post()
    //app.put()
    //app.delete()

    const port = process.env.PORT || 1111;

    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });

Explainations

    body-parser - To parse the data coming from POST requests, you have to install the body-parser package. This package allows you to use a series of middleware, which can decode data in different formats.

    cors - Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served

    req - request. 
        req.params - properties mapped to the named route “parameters”.
        req.query

    res- response. 
        res.text("this is a string") - sends text back to client
        res.json({"message": "I'm json"}) - sends json back to client
        res.send(new Date().toString()) - 

    app.listen(port) - tells your server to listen on a given port, putting it in running state

    app.use(path, middlewareFunction) - Mounts middleware, if no path is given middelware will executed for all requests

    .env - hidden file for environment variables. variables are accessible from the app as process.env.VAR_NAME.

    Middleware - Middleware functions are functions that take 3 arguments: req, res, and the next function. These functions execute some code that can have side effects on the app, and usually add information to the request or response objects. They can also end the cycle by sending a response when some condition is met. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, next().

    Route parameters - named segments of the URL, delimited by slashes (/). Values can be found in the req.params.

    Query string - delimited by a question mark (?), and includes field=value couples. Each couple is separated by an ampersand (&). Values found in req.query.