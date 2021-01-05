import { Logger } from "./logger";
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    private loggerStorage:Map<string, Map<string, Logger>> = new Map<string, Map<string, Logger>>();

    public getLogger(moduleName: string, loggerName: string): Logger {
        let loggerMap: Map<string, Logger>;
        let loggerInst: Logger;
        if (!this.loggerStorage.has(moduleName)) {
            loggerMap = new Map<string, Logger>();
            loggerInst = new Logger(moduleName, loggerName);
            loggerMap.set(loggerName, loggerInst);
            this.loggerStorage.set(moduleName, loggerMap);
        } else {
            loggerMap = this.loggerStorage.get(moduleName);
            if (!loggerMap.has(loggerName)) {
                loggerInst = new Logger(moduleName, loggerName);
                loggerMap.set(loggerName, loggerInst);
            } else {
                loggerInst = loggerMap.get(loggerName);
            }
        }
        return loggerInst;
    }
}
