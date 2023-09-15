import { Events } from "@models";
import Client from "@client";
import {Interaction} from "discord.js";



class interaction_Create extends Events {
    constructor() {
        super("interactionCreate")
    };

    async run(client: Client, interaction: Interaction) {

        if ( interaction.isModalSubmit() ) {
            const modals = client.interaction.modals.get(interaction.customId);

            if (modals) {
                this.TryCatch("Modals", client, interaction, modals, interaction.customId);
            };
        } else
        if (interaction.isCommand()) {

            const cmd = client.commands.subSlahs.get(interaction.commandName);

            if (cmd) {
                this.TryCatch("CommandSlash", client, interaction, cmd, interaction.commandName);

            } else if (!cmd) {
                return interaction.reply({ content: "Que raro no existe ese comandó " + cmd, ephemeral: true })
            };
        } if (interaction.isButton()) {
                const btn = client.interaction.buttons.get(interaction.customId);

                if (!btn) return interaction.reply({ content: "Que raro no existe ese boton", ephemeral: true });

                this.TryCatch("Buttons", client, interaction, btn, interaction.customId);
            } else
                if (interaction.isAnySelectMenu()) {
                    const menu = client.interaction.selectMenu.get(interaction.customId);
                    if (menu) {
                        this.TryCatch("Menu", client, interaction, menu, interaction.customId);
                    } else {
                        interaction.reply({ content: "Que raro no entro a un Select-Menu.", ephemeral: true});
                    };

        } else {
            console.log("no entro");

        };
    };

    async TryCatch(type: string, client: Client, interaction: Interaction, funtion: any, custom_id: string) {
        try {
            let data: { custom: string, value?: string, type: string } = { custom: "", type: "" };
            if (interaction.isCommand()) {

                //@ts-ignore
                const SubCommandGroup = interaction.options.getSubcommandGroup();
                //@ts-ignore
                const SubCommand = interaction.options.getSubcommand();

                if (typeof SubCommandGroup == "string" && SubCommand) data.custom = `${interaction.commandName}-${SubCommandGroup}-${SubCommand}`;
                else if ( typeof SubCommand == "string") data.custom = `${interaction.commandName}-${SubCommand}`;
                else data.custom = `${interaction.commandName}`;
                data.type = "Comando";
            } else if (interaction.isModalSubmit() || interaction.isButton() || interaction.isAnySelectMenu()) {
                data.custom = interaction.customId;
                data.type = type;
                data.value = "Componet"
            };

            await funtion.run(client, interaction);
            console.log("[Comando activado]: ".green + data.custom  + "[Type]: "+ data.type+ "[User]: ".cyan + interaction.member.user.username)
        } catch (error: any) {
            //@ts-ignore
            if(error.message.includes("No se encontro el archivo")) interaction.reply({ content: "Hubo un gran error en la base de datos.", ephemeral: true});
            //@ts-ignore
            else interaction.reply({ content: "Hubo un error. si esto sigue pasando comunicar al creador.", ephemeral: true })
            console.log("[Comando Slash Error]: ".red + error.stack.slice(0, 300) )
        };
    };



};

export default interaction_Create;
