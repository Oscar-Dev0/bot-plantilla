import Client from "@client";
import { PrefixCommands } from "@models";
import { Message } from "discord.js";

export class Example extends PrefixCommands {
    constructor(){
        super({
            name: "example"
        });
    };

    run(client: Client, message: Message<boolean>, args: string[]) {
        
    }
};