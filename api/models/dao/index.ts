import { ModelStatic } from "sequelize";
import { InitLeague, LeagueModel } from "./league";
import { InitSeason, SeasonModel } from "./season";
import { ClubModel, InitClub } from "./club";
import { InitPlayer, PlayerModel } from "./player";
import { ClubPlayerModel, InitClubPlayer } from "./clubPlayer";
import { InitSeasonPhase, SeasonPhaseModel } from "./seasonPhase";
import { InitPhaseTable, PhaseTableModel } from "./phaseTable";
import { InitPhaseMatch, PhaseMatchModel } from "./phaseMatch";
import { InitMatchPlayer, MatchPlayerModel } from "./matchPlayer";
import { InitMatchPlayerGoal, MatchPlayerGoalModel } from "./matchPlayerGoal";
import { InitMatchPlayerCard, MatchPlayerCardModel } from "./matchPlayerCard";
import PgOrm from "../../resources/pgorm";

class Db {
    league!: ModelStatic<LeagueModel>
    season!: ModelStatic<SeasonModel>
    club!: ModelStatic<ClubModel>
    player!: ModelStatic<PlayerModel>
    clubPlayer!: ModelStatic<ClubPlayerModel>
    seasonPhase!: ModelStatic<SeasonPhaseModel>
    phaseTable!: ModelStatic<PhaseTableModel>
    phaseMatch!: ModelStatic<PhaseMatchModel>
    matchPlayer!: ModelStatic<MatchPlayerModel>
    matchPlayerGoal!: ModelStatic<MatchPlayerGoalModel>
    matchPlayerCard!: ModelStatic<MatchPlayerCardModel>

    constructor(pgOrm: PgOrm) {
        this.league = InitLeague(pgOrm.orm())
        this.season = InitSeason(pgOrm.orm())
        this.club = InitClub(pgOrm.orm())
        this.player = InitPlayer(pgOrm.orm())
        this.clubPlayer = InitClubPlayer(pgOrm.orm())
        this.seasonPhase = InitSeasonPhase(pgOrm.orm())
        this.phaseTable = InitPhaseTable(pgOrm.orm())
        this.phaseMatch = InitPhaseMatch(pgOrm.orm())
        this.matchPlayer = InitMatchPlayer(pgOrm.orm())
        this.matchPlayerGoal = InitMatchPlayerGoal(pgOrm.orm())
        this.matchPlayerCard = InitMatchPlayerCard(pgOrm.orm())
    }
}

export default Db