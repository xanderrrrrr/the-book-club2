const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Groups collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/thebookclub"
);

const groupSeed = [
  {
    name: "The Dead Zone",
  },
  {
      name: "test1"
  }
];

db.Group
  .remove({})
  .then(() => db.Group.collection.insertMany(groupSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
