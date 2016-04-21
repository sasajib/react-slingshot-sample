/*eslint-disable import/default*/

import app from "ampersand-app";
import Router from "./routes";
import "./styles/main.scss";


window.app = app;

app.extend({
    init(){
        this.router = new Router();
        this.router.history.start();
    }
});

app.init();
