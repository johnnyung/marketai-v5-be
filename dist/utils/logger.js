import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { env } from "../config/env.js";
const { combine, timestamp, json, printf, colorize } = winston.format;
// Custom Dev Format
const devFormat = printf(({ level, message, timestamp, ...meta }) => {
    const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : "";
    return `${timestamp} [${level}]: ${message} ${metaStr}`;
});
// Transports
const transports = [
    new winston.transports.Console({
        level: env.NODE_ENV === "production" ? "info" : "debug",
        format: env.NODE_ENV === "production"
            ? combine(timestamp(), json())
            : combine(timestamp(), colorize(), devFormat),
    }),
];
// File Rotation (Production Only or if explicit)
if (env.NODE_ENV === "production" || process.env.ENABLE_FILE_LOGS === "true") {
    transports.push(new DailyRotateFile({
        filename: "logs/application-%DATE%.log",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "14d",
        level: "info",
    }));
    transports.push(new DailyRotateFile({
        filename: "logs/error-%DATE%.log",
        datePattern: "YYYY-MM-DD",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "30d",
        level: "error",
    }));
}
export const logger = winston.createLogger({
    defaultMeta: { service: "marketai-v5-backend" },
    transports,
});
/**
 * Helper for logging heavy objects safely
 */
export const logObject = (message, obj, level = "info") => {
    try {
        logger.log(level, message, { payload: JSON.stringify(obj, null, 2) });
    }
    catch (e) {
        logger.log(level, message, { payload: "[Circular or Invalid JSON]" });
    }
};
