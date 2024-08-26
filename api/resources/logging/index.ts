import pino, { DestinationStream, Logger, stdTimeFunctions } from "pino"

type LoggerConfig = {
    LogFile?: string,
    LogMode?: boolean
}

class Logging {
    private logger: Logger
    private mode: boolean

    constructor(config?: LoggerConfig) {
        this.mode = false

        let stream: DestinationStream | undefined = undefined
        if (config) {
            stream = this.setStream(config)
            this.mode = config.LogMode || false
        }

        this.logger = pino({
            base: undefined,
            formatters: {
                level: (label, _number) => {
                    return {level: label}
                }
            },
            timestamp: stdTimeFunctions.isoTime
        }, stream)
    }

    private setStream = (config: LoggerConfig): DestinationStream | undefined => {
        if (config.LogFile) {
            return pino.transport({
                targets: [
                    {
                        target: 'pino/file',
                        options: {
                            destination: config.LogFile, 
                            mkdir: true
                        }
                    }
                ]
            })
        }

        return undefined
    }

    info = (msg: string, data?: any) => {
        if (!this.mode) return

        this.logger.child(data).info(msg)
    }

    error = (err: Error, data?: any) => {
        if (!this.mode) return

        this.logger.child(data).error(err.message)
    }

    warn = (msg: string, data?: any) => {
        if (!this.mode) return
        
        this.logger.child(data).warn(msg)
    }
}

const InitializeLogging = (config?: LoggerConfig) => {
    return new Logging(config)
}

export default Logging
export {InitializeLogging}