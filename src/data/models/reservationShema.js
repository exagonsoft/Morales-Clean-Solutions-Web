const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
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
mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
module.exports = Reservation;
