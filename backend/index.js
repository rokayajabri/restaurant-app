require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const MealsRoute = require("./routes/meals");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const url = process.env.URL_MONGOOSE;
const dbname = process.env.DBNAME;

mongoose
  .connect(`${url}/${dbname}`, { useNewUrlParser: true })
  .then(() => console.log("connexion reussie"))
  .catch((error) => console.log('Erreur de connexion'));

app.use('/meals', MealsRoute);

app.listen(port, (err) => {
  if (!err) console.log("Enable to start server ...");
  else console.log("Server started ...");
});

