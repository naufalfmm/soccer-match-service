import { configDotenv } from "dotenv"
import { existsSync } from "fs"

type Config = {
    Name: string,
    Port: string,

    DbHost: string,
    DbPort: number,
    DbUsername: string,
    DbPassword: string,
    DbName: string,

    DbIdleConnection: number,
    DbOpenConnection: number,
    DbConnectionMaxLifeTime: number,

    DbLogMode: boolean,
    DbLogFile: string,
    DbLogThresholdMs: number,
    
    DbRetry: number,
    DbWaitSleep: number,

    LogMode: boolean,
    LogFile: string
}

const InitializeConfig = (): Config => {
    let envFile = ".env"
    if (process.env.ENV_FILE) envFile = process.env.ENV_FILE!

    if (envFile !== "" && existsSync(envFile)) configDotenv()

    const logFileDefault = './log/all.log'

    return {
        Name: process.env.NAME!,
        Port: process.env.PORT!,

        DbHost: process.env.DB_HOST!,
        DbPort: parseInt(process.env.DB_PORT || ''),
        DbUsername: process.env.DB_USERNAME!,
        DbPassword: process.env.DB_PASSWORD!,
        DbName: process.env.DB_NAME!,

        DbIdleConnection: parseInt(process.env.DB_MAX_IDLE_CONNECTION || ''),
        DbOpenConnection: parseInt(process.env.DB_MAX_OPEN_CONNECTION || ''),
        DbConnectionMaxLifeTime: parseInt(process.env.DB_CONNECTION_MAX_LIFE_TIME || ''),
    
        DbLogMode: Boolean(process.env.DB_LOG_MODE),
        DbLogFile: process.env.DB_LOG_FILE || logFileDefault,
        DbLogThresholdMs: parseInt(process.env.DB_LOG_THRESHOLD_MS || ''),
    
        DbRetry: parseInt(process.env.DB_RETRY || ''),
        DbWaitSleep: parseInt(process.env.DB_WAIT_SLEEP || ''),

        LogMode: Boolean(process.env.LOG_MODE),
        LogFile: process.env.LOG_FILE || logFileDefault,
    }
}

export default Config
export {InitializeConfig}