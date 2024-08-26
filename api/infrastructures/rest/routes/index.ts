import Resources from "../../../resources";
import Usecases from "../../../usecases";
import Controllers from "../controllers";
import { Express } from "express";

class Routes {
    controllers!: Controllers

    constructor(resources: Resources, usecases: Usecases) {
        this.controllers = new Controllers(resources, usecases)
    }

    register = (app: Express) => {}
}

export default Routes