import Client from "@client";
import { SubCommands } from "@models";
import { CacheType, CommandInteraction } from "discord.js";

export class Example extends SubCommands {
    constructor(){
        super("example");
    };

    run(client: Client, int: CommandInteraction<CacheType>) {
        
    }
};