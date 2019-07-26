
// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose
var Schema = mongoose.Schema;

var noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: {
    type: Date,
    default: Date.now
  },
  noteText: String
});

var Note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = Note;
