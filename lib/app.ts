
import {BotFrameworkAdapter,MemoryStorage,ConversationState} from "botbuilder";
import * as restify from "restify";
import * as aa from "./types";
import { EchoBot } from "./bot";
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage


app.listen(3000, () => console.log('Example app listening on port 3000!'));
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});
const Adapter=new BotFrameworkAdapter({
  appId: (process.env.ENV == "PROD") ? process.env.MICROSOFT_APP_ID  : ""
  , appPassword: (process.env.ENV == "PROD") ? process.env.MICROSOFT_APP_PASSWORD : ""
})

const echo=new EchoBot();
server.post("/api/messages", (req, res) => {
  Adapter.processActivity(req, res, async (context) => {
    echo.onTurn(context)
  });
});
