import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import nocache from "nocache";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import userRouter from './routes/User.js'; 

// Load environment variables from .env file
dotenv.config();





const app = express();

// View engine setup
app.set('views', path.join(new URL('.', import.meta.url).pathname, 'views'));
app.set('view engine', 'ejs');

// Middleware to log HTTP requests
app.use(morgan("dev"));
app.use(express.json());
app.use(expressEjsLayouts)
app.use(express.urlencoded({ extended: false }));
// Static files middleware
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// app.use(nocache());
app.use(function (req, res, next) {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });
  

// routes
app.use('/', userRouter); // Use the imported userRouter









// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

// Other middleware setup can go here
// Error handling middleware
app.use(function(err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error'); // Assuming you have an 'error' view in your 'views' directory.
});






// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
