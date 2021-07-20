const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  height: { type: Array },
  weight: { type: Array },
  color: { type: Array },
  adjectives: {
    hair: {type: Array},
    face: { type: Array },
    body: { type: Array },
    arm: { type: Array },
    leg: {type: Array},
    hands: {type:Array},
    feet: {type: Array}
  },
  
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret.hash;
  },
});

module.exports = User = mongoose.model("characters", schema);
