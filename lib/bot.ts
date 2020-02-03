import { TurnContext, ConversationState, BotFrameworkAdapter } from "botbuilder";
export class EchoBot{
    async onTurn(context: TurnContext) {
   
        if (context.activity.type=="message") {
            await context.sendActivity(`hi you sens ${context.activity.text}`)
            
          }
    }
}