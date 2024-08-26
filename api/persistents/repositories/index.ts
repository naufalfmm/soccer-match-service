import Db from "../../models/dao";
import Resources from "../../resources";
import LeagueRepositories from "./leagues";

class Repositories {
    league!: LeagueRepositories

    constructor(resources: Resources, db: Db) {
        this.league = new LeagueRepositories(resources, db.league)
    }
}

export default Repositories