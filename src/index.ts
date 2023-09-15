import "./paths";
process.stdout.write('\x1Bc');
import Client from "@client";

Client.center("╭──────────────────────────╮".blue);
Client.center("│".blue+"   Prendiendo Aplicacion  ".green + "│".blue);
Client.center("╰──────────────────────────╯".blue);

const client = new Client({
    intents: []
});

client.login()