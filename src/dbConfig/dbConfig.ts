import mongoose from "mongoose";

export async function connect() {
  try {
    if (process.env.MONGODB_URI) {
      mongoose.connect(process.env.MONGODB_URI);

      mongoose.connection.on("connected", () => {
        console.log("MongoDB connected successfully");
      });
      mongoose.connection.on("error", (err) => {
        console.error(
          "MongoDB connection error. Please make sure MongoDB is running."
        );
        console.error(err);
        process.exit();
      });
    } else {
      console.error("MongoDB URI could not resolve");
      process.exit();
    }
  } catch (err) {
    console.error("Something went wrong while connecting to MongoDB");
    console.error(err);
  }
}
