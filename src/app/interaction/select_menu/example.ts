import Client from "@client";
import { SelectMenu } from "@models";
import { AnySelectMenuInteraction,} from "discord.js";

export class Example extends SelectMenu {
    constructor(){
        super("example");
    };

    run(client: Client, int: AnySelectMenuInteraction) {
        
    }
};