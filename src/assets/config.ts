import { config } from "dotenv";
config();


export const keys = {
    token: process.env.BOT_TOKEN,
    prefix: process.env.BOT_PREFIX ?? "!",
    devs: []
};


/**
 * 
 * @param text El texto que se calcular el centro;
 * @returns retornara un mensaje en consola centrado 
 */
export const centrar = (text: string)=>{
        if(!text || typeof text != "string") return;
        let txt = eliminarFormatosANSI(text);
        const espacio = ' '.repeat(Math.max(0, (process.stdout.columns-txt.length) / 2));
        console.log(espacio + text);

};


/**
 * @param cadena Este valor es para ver si el texto tiene formato de color para borrarlo 
 * @returns devuelve el texto sin el formato de color
 */
function eliminarFormatosANSI(cadena: string) {
        const formatoANSIRegex = /\u001b\[\d{1,2}m/g;

        const cadenaLimpia = cadena.replace(formatoANSIRegex, '');
      
        return cadenaLimpia;
};
