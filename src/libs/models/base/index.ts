import { ColorResolvable, EmbedBuilder } from "discord.js";

export * from "./Interaction";
export * from "./commands";
export * from "./events";
export * from "./load";



export class Base {

    public embed(color: ColorResolvable = "Random",title?:string, description?:string){
        const embed = new EmbedBuilder();
        try {
            embed.setColor(color);
        } catch  {
            embed.setColor("Random");
        };

        if(typeof title == "string") embed.setTitle(title);
        if(typeof description == "string") embed.setDescription(description);
        return embed;
    };

    public error(title?:string, description?:string){
        const embed = new EmbedBuilder().setColor("Red");
        if(typeof title == "string") embed.setTitle(title);
        if(typeof description == "string") embed.setDescription(description);
        return embed;
    };

    public success(title?:string, description?:string){
        const embed = new EmbedBuilder().setColor("Green");
        if(typeof title == "string") embed.setTitle(title);
        if(typeof description == "string") embed.setDescription(description);
        return embed;
    };

    public warn(title?:string, description?:string){
        const embed = new EmbedBuilder().setColor("Orange");
        if(typeof title == "string") embed.setTitle(title);
        if(typeof description == "string") embed.setDescription(description);
        return embed;
    };
};