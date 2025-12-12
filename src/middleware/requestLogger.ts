import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { logger } from "../utils/logger.js";

// Extend Request type locally to avoid global type definition complexity in this script
interface AuthenticatedRequest extends Request {
  id?: string;
}

export function requestLogger(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  // Generate Correlation ID
  const correlationId = uuidv4();
  req.id = correlationId;
  res.setHeader("X-Correlation-ID", correlationId);

  const start = Date.now();
  const { method, originalUrl, ip } = req;

  // Log Request Start
  logger.info(`Incoming Request: ${method} ${originalUrl}`, {
    correlationId,
    ip,
    userAgent: req.get("user-agent"),
  });

  // Hook into response finish
  res.on("finish", () => {
    const duration = Date.now() - start;
    const status = res.statusCode;
    
    const logLevel = status >= 500 ? "error" : status >= 400 ? "warn" : "info";

    logger.log(logLevel, `Request Completed: ${method} ${originalUrl}`, {
      correlationId,
      status,
      duration: `${duration}ms`,
    });
  });

  next();
}
