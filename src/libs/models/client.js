const { Client: Cli, Collection } = require("discord.js");
const { centrar, keys } = require("../../assets/config");
const { Buttons, ModalSubmit, PrefixCommands, SelectMenu, SlashCommands, SubCommands } = require("@models");
const Load = require("./load");

/**
 * @typedef { import("discord.js") .ClientOptions} ClientOptions
 */

class Client extends Cli {
    /**
     * Comandos disponibles en el cliente.
     * @property {Collection<string, PrefixCommands>} prefix - Colección de comandos de prefijo.
     * @property {Collection<string, SlashCommands>} slash - Colección de comandos slash.
     * @property {Collection<string, SubCommands>} subSlahs - Colección de subcomandos slash.
     */
    commands = {
        prefix: new Collection(),
        slash: new Collection(),
        subSlahs: new Collection()
    };
    /**
     * Interacciones disponibles en el cliente.
     * @property {Collection<string, Buttons>} buttons - Colección de botones.
     * @property {Collection<string, SelectMenu>} selectMenu - Colección de menús seleccionables.
     * @property {Collection<string, ModalSubmit>} modals - Colección de modales de presentación.
     */
    interaction = {
        buttons: new Collection(),
        selectMenu: new Collection(),
        modals: new Collection()
    };
    static center = centrar;
    /**
     * @param {ClientOptions} options
     */
    constructor(options) {
        super(options);
        this.keys = keys;
        this.center = centrar;
        this.load = new Load(this);

        this.interaction = {
            buttons: new Collection(),
            selectMenu: new Collection(),
            modals: new Collection()
        };
    }

    async login() {
        const token = this.keys.token;
        if (typeof token !== "string" || token.length === 0) {
            centrar("╭───────────────╮".blue);
            centrar("│".blue + "   Sin Token   ".red + "│".blue);
            centrar("╰───────────────╯".blue);
            return "";
        }
        try {
            centrar("╭──────────────────╮".blue);
            centrar("│".blue + "   Token Valido   ".yellow + "│".blue);
            centrar("╰──────────────────╯".blue);
            this.load.load_all();
            return await super.login(token);
        } catch {
            centrar("╭─────────────────╮".blue);
            centrar("│".blue + "    Token invalido   ".red + "│".blue);
            centrar("╰─────────────────╯".blue);
        }
        return "";
    }
}

module.exports = Client;
