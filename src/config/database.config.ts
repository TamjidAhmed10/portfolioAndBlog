import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  try {
    // Replace <mongodb_connection_string> with your actual MongoDB connection string
    const dbURI = process.env.MONGODB_URI as string;

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
