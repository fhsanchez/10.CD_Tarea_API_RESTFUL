const express = require("express");
const mongoose = require('./server/config/mongoose');
const Otter = require('./server/models/task');
const router = require('./server/config/routes');

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Configuracion de vistas y Motor de plantillas EJS
// app.set("views", __dirname + "/client/views");
// app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/client/static"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Nueva linea despues de la Modularizacion
require('./server/config/routes.js')(app)


app.listen(7778, () => {
  console.log("Escuchando en el puerto 7778");
});
