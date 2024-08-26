import { green } from "cli-color";
import InitializeApp from "./app";
import http from "http";

InitializeApp().then(app => {
    const server = http.createServer(app)
    server.listen(app.get("port"), () => {
        console.log(green('======================================'));
        console.log(green('SERVER RUNNING ON PORT ' + app.get("port")));
        console.log(green('======================================'));
    })
}).catch(err => {
    throw new Error(err)
})