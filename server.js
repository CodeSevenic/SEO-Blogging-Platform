const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// bring routes
const blogRoutes = require('./routes/blog');

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE_CLOUD, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log('DB Connected!'));

// middleware
app.use(morgan('dev'));
// body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// cors
if (process.env.NODE_ENV == 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes middleware
app.use('/', blogRoutes);

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
