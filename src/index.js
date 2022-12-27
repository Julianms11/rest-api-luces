const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors");

const whiteList = ['https://luces-navidad-frontend.vercel.appd/'];

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin:whiteList}));


//routes
app.use('/api',require('./routes/index'))

//Starting server
app.listen(app.get('port'));
console.log('Server on port: ', app.get('port'));