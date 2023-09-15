const { Events } = require("@models");
const Client = require("@client");
const { Interaction } = require("discord.js");

/**
 * Clase que representa un evento para manejar interacciones de Discord.
 * @extends Events
 */
class InteractionCreate extends Events {
    /**
     * Crea una instancia de InteractionCreate.
     */
    constructor() {
        super("interactionCreate");
    };

    /**
     * Método que se ejecuta cuando se crea una interacción en Discord.
     * @param {Client} client - El cliente Discord.js.
     * @param {Interaction} interaction - La interacción creada.
     */
    async run(client, interaction) {
        if (interaction.isModalSubmit()) {
            // Manejar modal de presentación
            const modals = client.interaction.modals.get(interaction.customId);

            if (modals) {
                return this.TryCatch("Modals", client, interaction, modals, interaction.customId);
            };
        } else if (interaction.isCommand()) {
            // Manejar comando slash
            const cmd = client.commands.slash.get(interaction.commandName);

            if (cmd) {
                return this.TryCatch("CommandSlash", client, interaction, cmd, interaction.commandName);
            } else if (!cmd) {
                return interaction.reply({ content: "¡Qué raro! Ese comando no existe: " + interaction.commandName, ephemeral: true });
            };
        } if (interaction.isButton()) {
            // Manejar botón interactivo
            const btn = client.interaction.buttons.get(interaction.customId);

            if (!btn) return interaction.reply({ content: "¡Qué raro! Ese botón no existe.", ephemeral: true });

            return this.TryCatch("Buttons", client, interaction, btn, interaction.customId);
        } else if (interaction.isAnySelectMenu()) {
            // Manejar menú seleccionable
            const menu = client.interaction.selectMenu.get(interaction.customId);
            
            if (menu) {
                return this.TryCatch("Menu", client, interaction, menu, interaction.customId);
            } else {
                return interaction.reply({ content: "¡Qué raro! No se detectó un Select-Menu.", ephemeral: true });
            };
        } else {
            console.log("No se procesó ninguna interacción.");
        };
    };

    /**
     * Método para manejar las interacciones y controlar errores.
     * @param {string} type - El tipo de interacción.
     * @param {Client} client - El cliente Discord.js.
     * @param {Interaction} interaction - La interacción creada.
     * @param {any} funtion - La función a ejecutar.
     * @param {string} custom_id - El ID personalizado de la interacción.
     */
    async TryCatch(type, client, interaction, funtion, custom_id) {
        try {
            let data = { custom: "", type: "" };
            if (interaction.isCommand()) {
                const SubCommandGroup = interaction.options.getSubcommandGroup(false);
                const SubCommand = interaction.options.getSubcommand(false);

                if (typeof SubCommandGroup == "string" && SubCommand) data.custom = `${interaction.commandName}-${SubCommandGroup}-${SubCommand}`;
                else if (typeof SubCommand == "string") data.custom = `${interaction.commandName}-${SubCommand}`;
                else data.custom = `${interaction.commandName}`;
                data.type = "Comando";
            } else if (interaction.isModalSubmit() || interaction.isButton() || interaction.isAnySelectMenu()) {
                data.custom = interaction.customId;
                data.type = type;
            };

            await funtion.run(client, interaction);
            console.log("[Comando activado]: ".green + data.custom + " [Type]: ".magenta + data.type + " [User]: ".cyan + interaction.member.user.username)
        } catch (error) {
            if (error.message.includes("No se encontro el archivo")) {
                interaction.reply({ content: "Hubo un error en la base de datos.", ephemeral: true });
            } else {
                interaction.reply({ content: "Ocurrió un error. Si esto continúa, comunica al creador.", ephemeral: true })
            }
            console.log("[Comando Slash Error]: ".red + error.stack.slice(0, 300))
        };
    };
}

module.exports = InteractionCreate;
