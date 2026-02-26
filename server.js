const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes")); // Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});

connectDB();