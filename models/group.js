const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { 
    type: String,
    required: true 
  },
    // `member` is an object that stores unique members
  // The ref property links the ObjectId to the Members model
  // This allows us to populate the Group with associated members
  member: {
    type: Schema.Types.ObjectId,
    ref: "Member"
  }

});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
