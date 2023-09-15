import Client from "@client";
import { Events } from "@models";

export class Ready extends Events {
    constructor() {
        super('ready')
    };

    async run(client: Client) {
        client.center("╭────────────────╮".blue);
        client.center("│".blue + "  Bot Prendido  ".green + "│".blue);
        client.center("╰────────────────╯".blue);

        setTimeout(async ()=>{
            try {
                client.center("╭───────────────────────────╮".blue);
                client.center("│".blue + "  Cargando Comandos Slash  ".green + "│".blue);
                client.center("╰───────────────────────────╯".blue);
    
                await client.application.commands.set(client.commands.slash.map(x => x.toJson));
            } catch (error) {
                client.center("#".blue + ' Error Comandos '.red + '#'.blue);
                console.log(error.stack.slice(0, 500))
            };
    
        }, 10000)

    };
};