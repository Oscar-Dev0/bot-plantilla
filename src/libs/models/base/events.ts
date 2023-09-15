import Client from "@client";
import { Base } from "@models";
import { ClientEvents } from "discord.js";

export class Events extends Base {
    public name: keyof ClientEvents;
    public filePath?: string;
    
    constructor(options: keyof ClientEvents) {
            super();
            this.name = options;
    };

    run(client: Client, ...args: any[]): any | Promise<any> { };
}