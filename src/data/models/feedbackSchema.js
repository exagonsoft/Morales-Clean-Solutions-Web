const mongoose = require("mongoose");

const FeedBackSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "Creator is required!"],
  },
  feedback: {
    type: String,
    required: [true, "Feedback is required!"],
  }
});

const FeedBack =
mongoose.models.FeedBack || mongoose.model("FeedBack", FeedBackSchema);

module.exports = FeedBack;
