import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully!");
    });
    connection.on("error", (err) => {
      console.error("Error when mongoDb");
      console.error(err); 
      process.exit();
    });
  } catch (error) {
    console.error("Something went wrong");
    console.error(error);
  }
}