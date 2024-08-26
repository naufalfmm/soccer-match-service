import { IncludeOptions, Includeable, Model, ModelStatic, WhereOptions } from "sequelize";

let UsedPreloads: Preload[] = [];

enum PreloadJoinType {
    Default,
    Inner,
    Left,
    Right
}

enum PreloadType {
    Alias,
    Model
}

class Preload {
    alias!: string
    model?: ModelStatic<Model> | string
    where?: WhereOptions<any>
    joinType!: PreloadJoinType
    preloads?: Preload[]
    type!: PreloadType

    constructor(alias: string, model?: string | ModelStatic<Model>, where?: WhereOptions<any>, joinType?: PreloadJoinType, preloads?: Preload[]) {
        if (!model) {
            this.alias = alias
            this.joinType = joinType || PreloadJoinType.Left
            this.type = PreloadType.Alias

            return
        }

        this.alias = alias
        this.model = model
        this.where = where
        this.joinType = joinType || PreloadJoinType.Left
        this.preloads = preloads
        this.type = PreloadType.Model
    }

    toOpt = (models: {[key: string]: ModelStatic<Model>}): Includeable => {
        if (this.type === PreloadType.Alias) return this.alias

        let opt: IncludeOptions = {
            as: this.alias,
            required: false,
            where: this.where,
        }

        if (typeof this.model === 'string') {
            opt.model = models[this.model]
        } else {
            opt.model = this.model
        }

        if (this.joinType == PreloadJoinType.Inner) opt.required = true
        if (this.joinType === PreloadJoinType.Right) {
            opt.required = false
            opt.right = true
        }

        if (this.preloads) {
            opt.include = this.preloads.map(preload => preload.toOpt(models))
        }

        return opt
    }
}

class PreloadOrm {
    constructor() {}

    get = (models: {[key: string]: ModelStatic<Model>}): Includeable | Includeable[] => {
        if (!UsedPreloads) {
            return {}
        }

        let prelds: Includeable[] = []
        for (let i = 0; i < UsedPreloads.length; i++) {
            prelds.push(UsedPreloads[i].toOpt(models))
        }

        UsedPreloads = []

        if (prelds.length === 1) {
            return prelds[0]
        }

        return prelds
    }

    set = (preloads: Preload[]) => {
        UsedPreloads = preloads
    }

    setByAlias = (alias: string) => {
        UsedPreloads.push(new Preload(alias))
    }

    setByModel = (model: string | ModelStatic<Model>, alias: string, where: WhereOptions<any>, joinType: PreloadJoinType, preloads?: Preload[]) => {
        UsedPreloads.push(new Preload(alias, model, where, joinType, preloads))
    }
}

const CreatePreloadByModel = (model: string | ModelStatic<Model>, alias: string, where: WhereOptions<any>, joinType: PreloadJoinType, preloads?: Preload[]) => {
    return new Preload(alias, model, where, joinType, preloads)
}

const CreatePreloadByAlias = (alias: string) => {
   return new Preload(alias)
}

export default Preload
export {PreloadJoinType, CreatePreloadByModel, CreatePreloadByAlias, PreloadOrm}