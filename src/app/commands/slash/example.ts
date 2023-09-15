import Client from "@client";
import { SlashCommands } from "@models";
import { CacheType, CommandInteraction } from "discord.js";

export class Example extends SlashCommands {
    constructor(){
        super({
            name: "exapmle",
            description: "example"
        });
    };

    run(client: Client, int: CommandInteraction<CacheType>) {
        
    }
};