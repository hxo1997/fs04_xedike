const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5500;

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
    .then(console.log('Connected to MongoDB'))
    .catch(console.log);
app.listen(port,()=>{
    console.log('Server is running on port: ' + port);
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
    next();
  });

  app.use(express.urlencoded({extended:true}));
  app.use(express.json());

  app.use(passport.initialize())
  require('./config/passport')(passport);

  app.use('/uploads', express.static('uploads'));

app.use('/api/user', require('./routes/api/user'));
app.use('/api/user/driver', require('./routes/api/driver'));
app.use('/api/trip', require('./routes/api/trip'));