import Db from "../models/dao";
import Resources from "../resources";
import Repositories from "./repositories";

class Persistents {
    repositories!: Repositories

    constructor(resources: Resources, db: Db) {
        this.repositories = new Repositories(resources, db)
    }
}

export default Persistents