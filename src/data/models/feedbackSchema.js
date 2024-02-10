import { Schema, model, models } from "mongoose";

const FeedBackSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "Creator is required!"],
  },
  feedback: {
    type: String,
    required: [true, "Feedback is required!"],
  }
});

const FeedBack =
  models.FeedBack || model("FeedBack", FeedBackSchema);
export default FeedBack;
