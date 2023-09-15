const { GatewayIntentBits, Partials } = require("discord.js");
require("./paths");
process.stdout.write('\x1Bc');
const Client = require("@client");

Client.center("╭──────────────────────────╮".blue);
Client.center("│".blue+"   Prendiendo Aplicacion  ".green + "│".blue);
Client.center("╰──────────────────────────╯".blue);

const client = new Client({
    intents: [ GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages ],
    partials: [ Partials.Message, Partials.Channel ]
});

client.login();
