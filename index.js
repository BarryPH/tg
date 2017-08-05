const express = require('express');
const logger = require('morgan');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static('./public'));

app.use('/', require('./routes/index.js'));

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server is running on port: ${port}`);
