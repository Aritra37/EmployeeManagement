import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  joining: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },

  admin: {
    type: Boolean,
    default: false,
  },
});

const Employees = mongoose.model("Employees", UserSchema);

export default Employees;
