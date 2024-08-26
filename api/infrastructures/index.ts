import Resources from "../resources";
import Usecases from "../usecases";
import Rest from "./rest";
import { Express } from "express";

class Infrastructures {
    rest!: Rest

    constructor(resources: Resources, usecases: Usecases) {
        this.rest = new Rest(resources, usecases)
    }

    register = (app: Express) => {
        this.rest.register(app)
    }
}

export default Infrastructures