import Config, { InitializeConfig } from "./config"
import Logging, { InitializeLogging } from "./logging"
import PgOrm, { InitializePgOrm } from "./pgorm"

type Resources = {
    Config: Config
    PgOrm: PgOrm,
    Logging: Logging
}

const InitializeResources = async (): Promise<Resources> => {
    const config = InitializeConfig()
    const pgOrm = await InitializePgOrm(config)
    const logging = InitializeLogging({
        LogMode: config.LogMode,
        LogFile: config.LogFile
    })

    return {
        Config: config,
        PgOrm: pgOrm,
        Logging: logging
    }
}

export default Resources
export {InitializeResources}