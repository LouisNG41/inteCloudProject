// service2/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Service 2 (Current Time) listening at http://localhost:${port}`);
});
