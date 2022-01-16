const express = require('express');
const bodyParser = require('body-parser')

const app = express();
// const port = process.env.PORT || 3000;

const adminRoute  = require('./route/admin_general.route');
const adminCentreRoute = require("./route/adminC.route");

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/api/admin',adminRoute);
app.use("/api/adminCentre", adminCentreRoute);


app.listen(5001, () => {
    console.log('Server is running at port 5001');
});