// Import required modules
const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index.js");

const app = express();
console.log(__dirname,"views");
// Set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// ... (other middleware and routes setup)

// Use the indexRouter for handling routes
app.use("/", indexRouter);

// ... (error handling and other middleware)

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

