import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

const DB_STATES = ["disconnected", "connected", "connecting", "disconnecting"];

router.get("/", (req, res) => {
  res.json({
    success: true,
    status: "ok",
    database: DB_STATES[mongoose.connection.readyState] || "unknown",
    time: new Date().toISOString(),
  });
});

export default router;