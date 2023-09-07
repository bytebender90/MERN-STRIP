require('dotenv').config();

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const CorsHandler = require ("./Hooks/CorsHandler") ; 
//const httpsRedirctor = require("./Hooks/httpsRedirctor") ; 


//////////////////// main Middlewares   /////////////////////////
app.use(CorsHandler);
//app.use(httpsRedirctor); 
app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

/////////////////////////////////////////////////////////////////
//////////////////// DataBase Connections   /////////////////////

//const url = "mongodb+srv://nodeapi:rIz8zuavsXmAquWN@funnelhackerlabserverle.ifbsztn.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb://127.0.0.1:27017/FunnelsApp" ; 
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));



  /////////////////////////////////////////////////////////////////
//////////////////// API Routing Handler   /////////////////////////

const funnelRoutes = require("./api/routes/funnels");
const userRoutes = require("./api/routes/users");
const webhookRoutes = require ("./api/routes/webhook") ; 
// Routes
app.use("/funnels", funnelRoutes);
app.use("/users", userRoutes);
app.use("/webhook", webhookRoutes);

//app.use("/payments", paymentRoutes);

//  APP Routing 
app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'public', 'index.html'));});
/////////////////////////////////////////////////////////////////
///////////////  Error Handler //////////////////////////////////

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Somthing Bad Happen :( ",
  });
});

module.exports = app;
