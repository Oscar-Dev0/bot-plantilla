// Cargamos las variables de entorno desde el archivo .env
require("dotenv").config();

/**
 * Objeto de configuración que contiene las claves de acceso.
 * @property {string} token - Token del bot.
 * @property {string} prefix - Prefijo del bot (predeterminado: "!").
 * @property {string[]} devs - Lista de IDs de desarrolladores (vacía por defecto).
 */
exports.keys = {
    token: process.env.BOT_TOKEN,
    prefix: process.env.BOT_PREFIX ?? "!",
    devs: []
};

/**
 * Centra un mensaje en la consola.
 * @param {string} text - El texto que se va a centrar.
 */
exports.centrar = (text) => {
    if (!text || typeof text !== "string") return;
    let txt = eliminarFormatosANSI(text);
    const espacio = ' '.repeat(Math.max(0, (process.stdout.columns - txt.length) / 2));
    console.log(espacio + text);
};

/**
 * Elimina los formatos ANSI de una cadena de texto.
 * @param {string} cadena - La cadena de texto con formatos ANSI.
 * @returns {string} La cadena de texto sin formatos ANSI.
 */
function eliminarFormatosANSI(cadena) {
    const formatoANSIRegex = /\u001b\[\d{1,2}m/g;
    const cadenaLimpia = cadena.replace(formatoANSIRegex, '');
    return cadenaLimpia;
}
