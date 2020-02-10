var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    _memberId: {
        type: Schema.Types.ObjectId,
        ref: "Member"
    },
    // author of the book should be required
    // i am setting to false for init testing
    author: { 
        type: String,
        required: false 
    },
    // title will be required
    title: {
        type: String,
        required: true
    },
    // the audio duration is not required
    // but will be used for calculations
    audioDuration: {
        type: Number,
        required: false
    },
    // the text duration is not required
    // but will be used for calculations
    textDuration: {
        type: Number,
        required: false
    },
    created: {
        type: Date, 
        default: Date.now
    },
    meetUpDate: {
        type: Date
    }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", bookSchema);

// Export the Note model
module.exports = Book;
