import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDB() {
  mongoose.set("strictQuery", true);

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });

  await mongoose.connect(env.databaseUrl, {
    serverSelectionTimeoutMS: 8000,
  });

  console.log("MongoDB connected");
}