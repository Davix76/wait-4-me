const app = require('express')();
const passport = require('passport');

require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/exprexxcontroller')(app);

const index = require('./routes/index');
const auth = require('./routes/auth');
const user = require('./routes/user');
const campaign = require('./routes/campaign');
const review = require('./routes/review');

app.use('/', index);
app.use('/auth', auth);
app.use('/user', user);
app.use('/campaign', campaign);
app.use('/review', review);


require('./config/error-handler')(app);
module.exports = app;
