import Base from "@models";
import Client from "@client";
import { Message } from "discord.js";

export class PrefixCommands extends Base{
        public name: string;
        public alias?: Array<string>;
        public dev?: boolean;
        public filePath?: string;

        constructor(options: CommandsOptions){
                super();
                this.name = options.name;
                this.alias = options.alias;
                this.dev = options.dev;
        };
        run(client: Client, message: Message, args: string[]): any | Promise<any>{};
        

};

interface CommandsOptions {
    name: string;
    alias?: string[];
    dev?: boolean;
};