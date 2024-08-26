import { ModelStatic } from "sequelize";
import Resources from "../../../resources";
import League, { LeagueModel } from "../../../models/dao/league";

class LeagueRepositories {
    private resources!: Resources
    private league!: ModelStatic<LeagueModel>

    constructor(resources: Resources, league: ModelStatic<LeagueModel>) {
        this.resources = resources
        this.league = league
    }

    create = async (le: League): Promise<LeagueModel> => {
        try {
            return await this.league.create(le)
        } catch (error) {
            throw error
        }
    }
}

export default LeagueRepositories