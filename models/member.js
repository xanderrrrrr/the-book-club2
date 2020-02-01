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
  }
});

// This creates our model from the above schema, using mongoose's model method
var Member = mongoose.model("Member", memberSchema);

// Export the Note model
module.exports = Member;
