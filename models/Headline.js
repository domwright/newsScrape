// Headline model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  
  summary: {
    type: String,
    required: true
  },
  
  url: {
    type: String,
    required: true
  },
  
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model\
var Headline = mongoose.model("Headline", headlineSchema);

// Export
module.exports = Headline;
