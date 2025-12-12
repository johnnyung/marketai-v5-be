import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error("🔥 Global Error Handler caught:", err);

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  const details = err.details || {};

  // Standardized Error Response
  res.status(status).json({
    status: "error",
    message,
    details,
    path: req.originalUrl,
    timestamp: new Date().toISOString()
  });
}
