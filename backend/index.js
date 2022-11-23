const express = require('express');
const echoRoutes = require('./routes/echoroutes');
const cors = require("cors");


const app = express();

const corsOption = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOption))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use("/api/echo", echoRoutes)

app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
});

module.exports = app;