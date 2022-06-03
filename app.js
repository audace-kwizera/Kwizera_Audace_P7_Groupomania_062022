// Création de express
const express = require('express');
const routes = require('./routes');
const app = express();

// Fix erreur cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.urlencoded({extended: true}));
// Middleware pour intercepter tout ce qui contient du json
app.use(express.json());

app.use('/api', routes);


//app.use((req, res, next) => {
//	console.log('Requête reçue !');
//	next();
//});
//
//app.use((req, res, next) => {
//	res.status(201);
//	next();
//});
//
//
//app.use((req, res, next) => {
//	res.json({ message: 'Votre requête a bien été reçu !' });
//	next();
//});
//
//app.use((req, res) => {
//	console.log('Réponse envoyé avec succès !');
//});

module.exports = app;