const express = require('express');
const morgan = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index');

require('dotenv').config();
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(app.get('port'), () => {
  console.log(app.get('port'), 'started server');
});
