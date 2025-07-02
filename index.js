const express = require("express");
const app=express();
const path = require("path"); //: Helps in handling file paths across OS.
const fs= require("fs"); //Node’s built-in File System module for file operations.


app.use(express.json()); // Middleware to parse JSON data from incoming requests
//This line tells Express to automatically convert JSON data in incoming requests into a JavaScript object that you can use in your code.
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data from incoming requests
// This allows the application to handle form submissions and JSON data in requests
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory
app.set("view engine", "ejs"); //render ejs files


// Serve the files from the "files" directory
// This allows the application to access files stored in the "files" directory
app.get('/', function(req, res) {
    fs.readdir(`./files`, function(err, files) { //read the contents of the "files" directory, Sends them to the index.ejs page.
    res.render("index", {files: files});// Render the index.ejs file to the frontend
    //files is an array passed to EJS to display each file.
    })
});



// Takes the file name from the URL (dynamic route).
// Reads its content using fs.readFile().
// Sends both file name and content to show.ejs.
// Read a file
// This route is used to read the content of a file and display it

app.get('/file/:filename', function(req, res)
// This line defines a GET route in your Express app that listens to URLs like:
// http://localhost:3000/file/anyfilename.txt
{
 fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
   res.render('show', {filename: req.params.filename, filedata:filedata}); // Render the show.ejs file to the frontend with file data
   //filedata is the content of the file, which is passed to EJS to display
});
});

// Render the edit page for a specific file
// This allows users to edit the content of the file
app.get('/edit/:filename', function(req, res) {
 fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
   res.render('edit', {filename: req.params.filename, filedata:filedata}); // Render the edit.ejs file to the frontend with file data
});
});

// Edit the file name
app.post('/edit', function(req, res) {
    fs.rename(`./files/${req.body.Previous}`, `./files/${req.body.new}`, function(err) {
    res.redirect('/');
    });
})
   //Connected to: edit.ejs
  //  <form action="/edit" method="post">
  //               <input class="block w-1/4 rounded md outline-none px-5 py-2 bg-zinc-800 text-white" type="text" placeholder="Previous Name" name="Previous" value="<%= filename %>"/>
  //               <textarea class="block w-1/4 rounded-md outline-none mt-2 px-5 py-2 bg-zinc-800 text-white" placeholder="New Name" name="new"></textarea>
  //               <input class="mt-2 bg-yellow-500 px-5 py-2 rounded-md "type="submit" value="update" />
  //       </form>

//   User opens /edit/:filename, sees old name prefilled.
// User enters a new name → submits form.
// Form sends POST data:
// { Previous: 'old.txt', new: 'new.txt' }
// Backend renames file using fs.rename()
// Redirects to homepage.


// Create a new file
app.post("/create", function(req, res) {
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err) {
});
    res.redirect("/");
});

// Connected to: index.ejs
// <form action="/create" method="post">
//   <input name="title" />
//   <textarea name="details"></textarea>
// </form>

// User fills out title and content → clicks "Add Task".
// Form sends POST data:
// { title: 'Hello World', details: 'This is a test' }
// Backend creates HelloWorld.txt in files/
// Redirects back to homepage.

// Delete a file
app.post("/delete/:filename", (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, (err) => {
    if (err) return res.send("Error deleting file");
    res.redirect("/");
  });
});
// Connected to: index.ejs
// <form action="/delete/<%= val %>" method="POST">
//   <button>Delete</button>
// </form>

// Every file card has a "Delete" button.
// Button submits a POST request to /delete/<filename>.
// Backend deletes that file from files/ folder.
// Redirects to homepage


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

// Connected to: show.ejs or similar (edit content page)
// <form action="/save" method="post">
//   <input type="hidden" name="filename" value="<%= filename %>">
//   <textarea name="filedata"><%= filedata %></textarea>
// </form>

// 💡 Flow:
// User views the file, edits content in textarea.
// Form sends POST data:
// { filename: 'note.txt', filedata: 'Updated content...' }
// Backend overwrites the file using fs.writeFile()
// Redirects to homepage.


app.listen(3000);




//  Summary Table
// Route	      Method	  Triggered From	                  Action                           	File System Action
// /edit	      POST	    edit.ejs	                        Rename a file	                      fs.rename()
// /create    	POST	    index.ejs	                        Create new file	                    fs.writeFile()
// /delete/:fn	POST	    index.ejs button	            Delete a file	                      fs.unlink()
// /save	      POST	    show.ejs (or edit page)         	Update file content                fs.writeFile()










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