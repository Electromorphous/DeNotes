import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: [String],
    require: [true, "Please provide notes array"],
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiration: Date || null,
  verifyToken: String,
  verifyTokenExpiration: Date || null,
});

const User = mongoose.models.users ?? mongoose.model("users", userSchema);

export default User;
