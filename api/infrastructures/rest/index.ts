import Resources from "../../resources";
import Usecases from "../../usecases";
import Routes from "./routes";
import { Express } from "express";

class Rest {
    routes!: Routes

    constructor(resources: Resources, usecases: Usecases) {
        this.routes = new Routes(resources, usecases)
    }

    register = (app: Express) => {
        this.routes.register(app)
    }
}

export default Rest