import Client from "@client";
import { Events } from "@models";

export class Example extends Events {
    constructor(){
        super('debug')
    };

    run(client: Client, ...args: any[]) {
        
    }
}