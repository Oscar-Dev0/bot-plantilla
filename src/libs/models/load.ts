import { BaseLoad } from "@models";
import Client from "@client";

export default class Load extends BaseLoad{
    constructor(client: Client){
        super(client);
    };

     load_all(){
        // events
        this.load('../../../../app/events');
        //comandos
        this.load('../../../../app/commands/prefix');
        this.load('../../../../app/commands/slash');
        //interactions
        this.load('../../../../app/interaction/buttons');
        this.load('../../../../app/interaction/select_menu');
        this.load('../../../../app/interaction/SubCommands');
        this.load('../../../../app/interaction/modalSubmit')
    };

};