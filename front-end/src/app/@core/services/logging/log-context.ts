import { LogLevel } from "./log-level";

export class LogContext {
    static logTimeFormat = "yyyy-MM-dd HH:mm:ss.SSS";
    static logLevel = LogLevel.DEBUG; // Default log level

    static setLogLevel(inLogLevel: number) {
        LogContext.logLevel = inLogLevel;
    }
}
