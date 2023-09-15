import { lstat, readdirSync } from "fs";
import { join } from "path";
import Client from '@client';
import { SelectMenu, SlashCommands, Buttons, SubCommands, ModalSubmit, Events, PrefixCommands }  from "@models";
import { promisify } from 'util';

import import_fresh from 'import-fresh';

const lstatAsync = promisify(lstat);

export class BaseLoad {
    public client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async load(dir: string){
        const files = await this.getFiles(dir);
        if( /\..\w+/.test(dir)) dir = __dirname + dir;
        for (const value of files) {
            const file = join(dir, value);
            
            try {
                const arch = import_fresh<any>(file);
                let archivo: any;
                if (arch?.default) {
                    try{archivo = new arch.default();} catch {if(typeof arch == "object"){ archivo = arch.default  } else { return undefined};}
                } else {
                    try{ 
                    const s = Object.values<any>(arch)[0];
                    archivo = new s(); 
                } catch {
                    if(typeof arch == "object"){ archivo = arch  } else { return undefined};
                };
                };
                // commands
                if (archivo instanceof PrefixCommands) {
                    archivo.filePath = file;
                    this.client.commands.prefix.set(archivo?.name, archivo);
                } else if(archivo instanceof SlashCommands ){
                    archivo.filePath = file;
                    this.client.commands.slash.set(archivo?.name, archivo);
                } else //interactions
                 if (archivo instanceof Buttons) {
                    archivo.filePath = file;
                    this.client.interaction.buttons.set(archivo?.customID, archivo);
                } else if (archivo instanceof SelectMenu) {
                    archivo.filePath = file;
                    this.client.interaction.selectMenu.set(archivo?.customID, archivo);
                } else if(archivo instanceof SubCommands){
                    archivo.filePath = file;
                    this.client.commands.subSlahs.set(archivo?.name, archivo);
                } else if(archivo instanceof ModalSubmit){
                    archivo.filePath = file;
                    this.client.interaction.modals.set(archivo?.customID, archivo);
                } else
                // events
                if (archivo instanceof Events) {
                    archivo.filePath = file;
                    this.client.on(archivo.name, async (...args: any[]) =>
                    { 
                        if (archivo instanceof Events) try{
                            await archivo?.run(this.client, ...args)
                        } catch(e){
                            if( "presenceUpdate" == archivo.name) return;
                            console.log(`Event-Error(${archivo.name}): ${e.message}`)
                        };
                    });
                };
            } catch (e: any){
                console.log(e)
            };
        };
    };

    async getFiles(dir: string): Promise<string[]> {
        let files_array: string[] = [];
        if (dir.includes('../')) dir = __dirname + dir;

        const dir_folder = join(dir);
        const files = readdirSync(dir_folder);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            try {
                const stats = await lstatAsync(join(dir_folder, file));
                if (stats.isDirectory()) {
                     this.load(join(dir_folder, file));
                } else if( stats.isFile() && file.endsWith('.d.ts') ) return;
                else if (stats.isFile() && (file.endsWith('.js') || file.endsWith('.ts'))) {
                    files_array.push(file);
                }
            } catch (err) {
                console.error(err);
            }
        }
        return files_array;
    };
}
