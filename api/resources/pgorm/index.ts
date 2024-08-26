import { ConnectionError, Model, ModelStatic, Options, Sequelize, Transaction, WhereOptions } from "sequelize";
import Preload, { PreloadJoinType, PreloadOrm } from "./preload";
import Config from "../config";
import { InitializeLogging } from "../logging";

class PgOrm {
    private sequelizeOrm!: Sequelize
    private trx?: Transaction
    private preload!: PreloadOrm

    constructor(seqOrm: Sequelize) {
        this.sequelizeOrm = seqOrm
        this.preload = new PreloadOrm()
    }

    begin = async () => {
        if (this.trx === undefined) {
            return
        }

        this.trx = await this.sequelizeOrm.transaction()
    }

    rollback = async () => {
        if (this.trx === undefined) {
            return
        }

        await this.trx.rollback()
        this.trx = undefined
    }

    commit = async () => {
        if (this.trx === undefined) {
            return
        }

        await this.trx.commit()
        this.trx = undefined
    }

    getPreloads = () => {
        return this.preload.get(this.sequelizeOrm.models)
    }

    orm = () => {
        return this.sequelizeOrm
    }

    setPreloadByAlias = (alias: string) => {
        this.preload.setByAlias(alias)
    }

    setPreloadByModel = (model: string | ModelStatic<Model>, alias: string, where: WhereOptions<any>, joinType: PreloadJoinType, preloads?: Preload[]) => {
        this.preload.setByModel(model, alias, where, joinType, preloads)
    }
}

const InitializePgOrm = async (config: Config): Promise<PgOrm> => {
    let seqOpt: Options = {
        dialect: 'postgres',
        database: config.DbName,
        host: config.DbHost,
        port: config.DbPort,
        username: config.DbUsername,
        password: config.DbPassword,
        pool: {
            max: config.DbOpenConnection,
            idle: config.DbIdleConnection,
            acquire: config.DbConnectionMaxLifeTime
        }
    }

    if (config.DbRetry) {
        seqOpt.retry = {
            max: config.DbRetry,
            match: [ConnectionError],
            backoffBase: config.DbWaitSleep
        }
    }

    if (config.DbLogMode) {
        seqOpt.benchmark = true

        const logger = InitializeLogging({
            LogMode: config.DbLogMode,
            LogFile: config.DbLogFile
        })

        seqOpt.logging = (sql, timing) => {
            const data = {query: sql, runningTime: timing}

            logger.info("Query SQL", data)

            if (config.DbLogThresholdMs) return
            if (timing! >= config.DbLogThresholdMs) logger.warn("[BREACH THRESHOLD] Query SQL", data)
        }
    }

    const sequelize = new Sequelize(seqOpt)

    await sequelize.authenticate()

    return new PgOrm(sequelize)
}

export default PgOrm
export {InitializePgOrm}