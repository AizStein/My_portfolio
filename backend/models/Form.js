import mongoose, { mongo } from "mongoose";
import validator from "validator";

const formSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return validator.isAlpha(val);
      },
      message: (name) =>
        `${name.value} is not a valid first name! It must contain only letters.`,
    },
  },
  email: {
    type: String,
    required: ["Please add your email"],
    validate: [validator.isEmail, "Email is not valid"],
  },
  contactNumber: {
    type: String,
    validate: {
      validator: function (val) {
        return validator.isMobilePhone(val, "any");
      },
      message: "Invalid contact number",
    },
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: ["Please write your message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FormModel = mongoose.model("form", formSchema);

export default FormModel;
