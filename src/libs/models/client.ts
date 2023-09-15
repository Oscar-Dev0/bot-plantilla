import { Client as Cli, ClientOptions, Collection } from "discord.js";
import { centrar, keys } from "../../assets/config";
import { Buttons, ModalSubmit, PrefixCommands, SelectMenu, SlashCommands, SubCommands } from "@models";
import Load from "./load";

export default class Client extends Cli<true>{
    public  keys = keys;
    public static center = centrar;
    public center = centrar;
    public load = new Load(this);
    public commands =  {
        prefix: new Collection<string, PrefixCommands>,
        slash: new Collection<string, SlashCommands>,
        subSlahs: new Collection<string, SubCommands>
    };
    public interaction= {
        buttons: new Collection<string, Buttons>,
        selectMenu: new Collection<string, SelectMenu>,
        modals: new Collection<string, ModalSubmit>
    };

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
            centrar("╭──────────────────╮".blue);
            centrar("│".blue+"   Token Valido   ".yellow + "│".blue);
            centrar("╰──────────────────╯".blue);
            this.load.load_all();
            return await super.login(token);
        } catch {
            centrar("╭─────────────────╮".blue);
            centrar("│".blue+"    Token invalido   ".red + "│".blue);
            centrar("╰─────────────────╯".blue);
        }
        return "";
    };
};