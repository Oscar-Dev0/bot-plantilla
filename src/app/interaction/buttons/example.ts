import Client from "@client";
import { Buttons } from "@models";
import { ButtonInteraction, CacheType } from "discord.js";

export class Example extends Buttons {
    constructor(){
        super("example");
    };

    run(client: Client, int: ButtonInteraction<CacheType>) {
        
    };
};