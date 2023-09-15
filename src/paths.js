/**
 * Importación de la biblioteca 'colors' para la coloración de la consola.
 * @module colors
 */
require('colors');

/**
 * Importación de la función 'centrar' desde './assets/config' para centrar texto en la consola.
 * @function centrar
 * @see module:assets/config.centrar
 */
const { centrar } = require('./assets/config');

/**
 * Importación y registro de 'module-alias/register' para el manejo de alias de módulo.
 * @module module-alias/register
 */
require('module-alias/register');

/**
 * Importación de la función 'addAliases' desde 'module-alias' para agregar alias de módulo.
 * @function addAliases
 * @see module-alias.addAliases
 */
const { addAliases } = require("module-alias");

// Establecer alias de módulo para facilitar la importación
addAliases({
    /**
     * Alias para el módulo '@models'.
     * @alias @models
     * @type {string}
     */
    "@models": __dirname + "/libs/models/base/index.js",

    /**
     * Alias para el módulo '@client'.
     * @alias @client
     * @type {string}
     */
    "@client": __dirname + "/libs/models/client.js",
});

// Manejo de errores no capturados
process.on("uncaughtException", (error) => {
    centrar("#".blue + " Error ".red + "#".blue);
    console.log(error.stack?.slice(0, 500));
});

// Manejo de promesas no manejadas
process.on("unhandledRejection", async (reason, promise) => {
    console.log(reason, promise);
});
