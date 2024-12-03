import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log("DB connected successfully:", connectionInstance.connection.host);
    } catch (error) {
      console.error("MongoDB Connection Error:", error.message || error);
      process.exit(1);
    }
  };
  export default connectDB;