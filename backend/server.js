const express = require("express");
const app = express();
const dotenv = require('dotenv');
const cors = require("cors");
const mongoose = require("mongoose");
const routeUrls = require('./routes/noteRoute')


dotenv.config()

//connect to mongoose
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected Baby"))

app.use(cors());
app.use(express.json());

//require route
app.use("/app", routeUrls);

app.listen(3200, () => console.log("server is up and running baby"))