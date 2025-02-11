const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const usersRouter = require("./routes/userRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const ownersRouter = require("./routes/ownersRouter.js");
const dotenv = require("dotenv");
const flash = require("connect-flash");
const expressSession = require("express-session");
const indexRouter = require("./routes/index.js");

dotenv.config();

const connectDB = require("./config/db.js");
const { log } = require("console");

const app = express();

connectDB();

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res)=>{
  let error = req.flash('error')
  res.render('index', {error, loggedin: false})
})


app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
  log("server is running on http://localhost:3000");
}); 