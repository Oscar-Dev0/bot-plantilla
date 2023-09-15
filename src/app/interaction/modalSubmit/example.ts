import Client from "@client";
import { ModalSubmit } from "@models";
import {CacheType, ModalSubmitInteraction } from "discord.js";

export class Example extends ModalSubmit {
    constructor(){
        super("example");
    };


    run(client: Client, int: ModalSubmitInteraction<CacheType>, data?: {}) {
        
    };
};