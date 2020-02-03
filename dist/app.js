"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const restify = require("restify");
const bot_1 = require("./bot");
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Example app listening on port 3000!'));
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});
const Adapter = new botbuilder_1.BotFrameworkAdapter({
    appId: (process.env.ENV == "PROD") ? process.env.MICROSOFT_APP_ID : "",
    appPassword: (process.env.ENV == "PROD") ? process.env.MICROSOFT_APP_PASSWORD : ""
});
const echo = new bot_1.EchoBot();
server.post("/api/messages", (req, res) => {
    Adapter.processActivity(req, res, (context) => __awaiter(void 0, void 0, void 0, function* () {
        echo.onTurn(context);
    }));
});
//# sourceMappingURL=app.js.map