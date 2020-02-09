var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    _groupId: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    },
  // `name` is of type String
  name: { 
    type: String,
    required: true 
  }, 
  // `book` is an object that stores unique books
  // The ref property links the ObjectId to the Books model
  // This allows us to populate the Member with associated books
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Member = mongoose.model("Member", memberSchema);

// Export the Note model
module.exports = Member;
