const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

// Settings
// Inicializacion del Nº de puerto
app.set('port', 3003);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
const indexRoute = require('./views/routes/routes');
app.use(indexRoute);

// static files

// Listening the server
// Levantando pueto donde escucha 3003
app.listen(app.get('port'), () => {
  console.log('Server on port =>', app.get('port'));
});
