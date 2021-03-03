const express = require('express');
const app = express();
const port=8001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


var searchEngineController = require('./src/SearchEngine.controller');
app.route('/query').get(searchEngineController.searchEngineValues);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;