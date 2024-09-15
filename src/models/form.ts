import { Schema, model, models, Model } from "mongoose";

export type ProgramType = {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
};

const FormSchema = new Schema<ProgramType>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const FORM: Model<ProgramType> = models?.FORM || model<ProgramType>("FORM", FormSchema);
