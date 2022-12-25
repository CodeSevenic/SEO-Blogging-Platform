const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
    index: true,
    lowerCase: true,
  },
});
