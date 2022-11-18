const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

//mongoose.model("Recipients", recipientSchema);
module.exports = recipientSchema;
