// const express = require("express");
// const app=express();

// app.use(function(req, res, next) {
//     console.log("middleware function called");
//     next();
// });

// app.get("/", function(req,res)
// {
//     res.send("Hello, World!");
// })

// app.get("/about", function(req,res)
// {
//     res.send("About page");
// })

// app.get("/profile", function(req,res, next)     //for error handling
// {
//     return next(new Error("Profile not found"));
// })

// app.use((err, req, res, next) => {       // Error handler
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

// app.listen(3000);