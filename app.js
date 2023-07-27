// Import required modules
const createError = require('http-errors');
const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index.js");
const AdminRouter=require('./routes/Admin.js')
const dotenv=require('dotenv')
const expressEjsLayouts = require('express-ejs-layouts');
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
const session = require('express-session');

dotenv.config()
const app = express();
console.log(__dirname,"views");
// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json()); 
app.use(express.json());
app.use(expressEjsLayouts)
app.use(express.urlencoded({ extended: false }));
// Middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));
app.use(session({resave:false,saveUninitialized: true,secret:"key",cookie:{maxAge:6000000}}));

// ... (other middleware and routes setup)

// Use the indexRouter for handling routes
app.use("/", indexRouter);
app.use("/admin",AdminRouter);
// ... (error handling and other middleware)



// console.log(process.env.MONGO_URL);

mongoose.connect("mongodb+srv://shahidvk1212:8sM93TPCAhXY1A9I@cynosure.9h8odhn.mongodb.net/").then(()=>{
console.log("connected");
}).catch((error)=>{
  console.log(`database connection error${error}`);
})






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

