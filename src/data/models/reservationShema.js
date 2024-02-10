import { Schema, model, models } from "mongoose";

const ReservationSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "Creator is required!"],
  },
  date: {
    type: Date,
    required: [true, "Date is required!"],
    unique: [true, "Date already reserved!"],
  }
});

const Reservation =
  models.Reservation || model("Reservation", ReservationSchema);
export default Reservation;
