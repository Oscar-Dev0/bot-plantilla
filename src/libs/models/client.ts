import { Client as Cli, ClientOptions, Collection } from "discord.js";
import { centrar, keys } from "../../assets/config";
import { Buttons, ModalSubmit, PrefixCommands, SelectMenu, SlashCommands, SubCommands } from "@models";

export default class Client extends Cli<true>{
    public  keys = keys;
    public static center = centrar;
    public commands: {
        prefix: Collection<string, PrefixCommands>,
        slash: Collection<string, SlashCommands>,
        subSlahs: Collection<string, SubCommands>
    };
    public interaction: {
        buttons: Collection<string, Buttons>,
        selectMenu: Collection<string, SelectMenu>,
        modals: Collection<string, ModalSubmit>

    }

    constructor(options: ClientOptions){
        super(options);
    };

    public async login(){
        const token = this.keys.token; 
        if(typeof token != "string" || token.length == 0) {
            centrar("╭───────────────╮".blue);
            centrar("│".blue+"   Sin Token   ".red + "│".blue);
            centrar("╰───────────────╯".blue);
            return "";
        }
        try{
            return await super.login(token)
        } catch {
            centrar("╭────────────────────╮".blue);
            centrar("│".blue+"   Token invalido   ".red + "│".blue);
            centrar("╰────────────────────╯".blue);
        }
        return "";
    };
};