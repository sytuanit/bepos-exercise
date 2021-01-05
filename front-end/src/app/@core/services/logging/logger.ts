import { LogLevel } from "./log-level";
import { LogContext } from "./log-context";
import * as Moment from "moment";

export class Logger {
    moduleName: string;
    sourceName: string;

    constructor(modName: string, srcName: string) {
        this.moduleName = modName;
        this.sourceName = srcName;
    }

    debug(logContent: any) {
        this.doLog(logContent, LogLevel.DEBUG);
    }

    info(logContent: any) {
        this.doLog(logContent, LogLevel.INFO);
    }

    warn(logContent: any) {
        this.doLog(logContent, LogLevel.WARN);
    }

    error(logContent: any) {
        this.doLog(logContent, LogLevel.ERROR);
    }

    doLog(logContent: any, logLevel: number) {
        let configuredLogLevel = LogContext.logLevel;
        if (configuredLogLevel <= logLevel) {
            let dateTime = Moment().format("MM/DD/YYYY HH:mm:ss.SSS");
            let logLevelStr = this.getLogLevelStr(logLevel);
            let logContentFormat = `${dateTime} [${logLevelStr}][${this.moduleName}] [${this.sourceName}] - ${logContent}`;
            switch (logLevel) {
                case LogLevel.INFO:
                    console.log(`%c${logContentFormat}`, "color: #0000FF;");
                    break;

                case LogLevel.WARN:
                    console.log(`%c${logContentFormat}`, "color: #FFA500;");
                    break;

                case LogLevel.ERROR:
                    console.log(`%c${logContentFormat}`, "color: #FF0000;");
                    break;

                default:
                    console.log(`%c${logContentFormat}`, "color: #000000;");
                    break;
            }
        }
    }

    getLogLevelStr(logLevel: number) {
        let str = "";
        switch (logLevel) {
            case LogLevel.DEBUG:
                str = "DEBUG";
                break;

            case LogLevel.INFO:
                str = "INFO";
                break;

            case LogLevel.WARN:
                str = "WARN";
                break;

            case LogLevel.ERROR:
                str = "ERROR";
                break;
        }
        return str;
    }
}
