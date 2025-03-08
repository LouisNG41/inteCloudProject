// service1/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Service 1 (Random Message) listening at http://localhost:${port}`);
});