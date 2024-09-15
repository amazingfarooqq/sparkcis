import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? "", {
      dbName: "appointments",
    });
    isConnected = true;
  } catch (error) {
    console.error(error);
  }
};
