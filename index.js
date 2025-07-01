const express = require("express");
const app=express();
const path = require("path");
const fs= require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory
app.set("view engine", "ejs"); //render ajs files

// Serve the files from the "files" directory
// This allows the application to access files stored in the "files" directory
app.get('/', function(req, res) {
    fs.readdir(`./files`, function(err, files) {
    res.render("index", {files: files});// Render the index.ejs file to the frontend
    })
});

// Read a file
// This route is used to read the content of a file and display it
app.get('/file/:filename', function(req, res) {
 fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
   res.render('show', {filename: req.params.filename, filedata:filedata}); // Render the file.ejs file to the frontend with file data
});
});

// Render the edit page for a specific file
// This allows users to edit the content of the file
app.get('/edit/:filename', function(req, res) {
 fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
   res.render('edit', {filename: req.params.filename, filedata:filedata}); // Render the file.ejs file to the frontend with file data
});
});

// Edit the file name
app.post('/edit', function(req, res) {
    fs.rename(`./files/${req.body.Previous}`, `./files/${req.body.new}`, function(err) {
    res.redirect('/');
    });
})

// Create a new file
app.post("/create", function(req, res) {
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err) {
});
    res.redirect("/");
});

// Delete a file
app.post("/delete/:filename", (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, (err) => {
    if (err) return res.send("Error deleting file");
    res.redirect("/");
  });
});

// Save updated content to the file
app.post("/save", function(req, res) {
  fs.writeFile(`./files/${req.body.filename}`, req.body.filedata, function(err) {
    if (err) {
      console.error(err);
      return res.send("Error saving file content");
    }
    res.redirect("/");
  });
});




app.listen(3000);













// const express = require("express");
// const app=express();
// const path = require("path");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory
// app.set("view engine", "ejs"); //render ajs files

// app.get("/", function(req, res) {
//     res.render("index");  // Render the index.ejs file to the frontend
// });
// app.get("/profile/:username", function(req, res) {
//     // res.send("working");  // dynamic route example, localhost:3000/profile/username(any username)
//     res.send(`Profile of ${req.params.username}`); // Send a response with the username
// });
// app.get("/about/:username/:age", function(req, res) {
//     res.send(`About ${req.params.username}, Age: ${req.params.age}`); // Send a response with username and age
// });
// app.listen(3000, function() {
//     console.log("Server is running on port 3000");
// })