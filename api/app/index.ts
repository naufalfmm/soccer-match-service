import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { InitializeResources } from "../resources";
import Db from "../models/dao";
import Persistents from "../persistents";
import Usecases from "../usecases";
import Infrastructures from "../infrastructures";

const InitializeApp = async (): Promise<Express> => {
    const app = express()

    app.use(cors())

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    const resources = await InitializeResources()

    app.set("port", (resources.Config.Port || 8080))

    const db = new Db(resources.PgOrm)

    const persists = new Persistents(resources, db)
    const usecs = new Usecases(resources, persists)

    const infras = new Infrastructures(resources, usecs)
    infras.register(app)

    return app
}

export default InitializeApp