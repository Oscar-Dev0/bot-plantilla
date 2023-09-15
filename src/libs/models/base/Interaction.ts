import { Base } from "@models";
import Client from "@client";
import { AnySelectMenuInteraction, ApplicationCommandData, ButtonInteraction, CommandInteraction, ModalSubmitInteraction,} from "discord.js";

export class Buttons extends Base {
    public customID: string;
    public filePath?: string;

    constructor(customID: string) {
        super()
        this.customID = customID;
    };
    run(client: Client, int: ButtonInteraction): any | Promise<any> {}
};

export class SelectMenu extends Base {
    public customID: string;
    public filePath?: string;
    
    constructor(customID: string ){
        super();
        this.customID = customID;
    };
    run(client: Client, int: AnySelectMenuInteraction): any | Promise<any> {}
};

export class SlashCommands extends Base{
    public name: string;
    public dev?: boolean;
    public toJson: ApplicationCommandData;
    public filePath?: string;
    

    constructor(options: ApplicationCommandData){
            super()
            this.name = options.name;
            this.toJson = options;
    };
    run(client: Client, int: CommandInteraction): any | Promise<any> {}
};


export class SubCommands extends Base{
    public name: string;
    public filePath?: string;

    constructor(name: string){
        super();
        this.name = name;
    };
    run(client: Client, int: CommandInteraction): any | Promise<any> {}
};


export class ModalSubmit extends Base{
    public customID: string;
    public filePath?: string;

    constructor(customID: string) {
        super();
        this.customID = customID;
    };
    run(client: Client, int: ModalSubmitInteraction, data?: {}): any | Promise<any> {}
};