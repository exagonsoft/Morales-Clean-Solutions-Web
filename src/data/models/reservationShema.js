import { Schema, model, models } from "mongoose";

const ReservationSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile is required"],
  },
  address: {
    type: String,
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
    unique: [true, "Date already reserved"],
  }
});

const Reservation =
  models.Reservation || model("Reservation", ReservationSchema);
export default Reservation;
