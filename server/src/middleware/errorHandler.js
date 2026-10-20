import { env } from "../config/env.js";

// Express recognizes an error handler by its 4 arguments. Do not remove "next".
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  if (statusCode >= 500) {
    console.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message:
      statusCode >= 500 && env.isProduction
        ? "Something went wrong. Please try again."
        : err.message || "Server error",
  });
}