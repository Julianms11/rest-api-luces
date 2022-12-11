const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors");

//settings
app.set('port', process.env.PORT || 3002);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//routes
app.use('/api',require('./routes/index'))

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});