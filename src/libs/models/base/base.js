const { ColorResolvable, MessageEmbed } = require("discord.js");

/**
 * Clase base para construir objetos Embed.
 */
class Base {
    /**
     * Crea un objeto Embed con el color especificado, título y descripción.
     * @param {ColorResolvable} color - El color del Embed.
     * @param {string} [title] - El título del Embed (opcional).
     * @param {string} [description] - La descripción del Embed (opcional).
     * @returns {MessageEmbed} El objeto Embed creado.
     */
    embed(color = "RANDOM", title, description) {
        const embed = new MessageEmbed();
        try {
            embed.setColor(color);
        } catch {
            embed.setColor("RANDOM");
        }

        if (typeof title === "string") embed.setTitle(title);
        if (typeof description === "string") embed.setDescription(description);
        return embed;
    }

    /**
     * Crea un objeto Embed de error con el título y descripción especificados.
     * @param {string} [title] - El título del Embed (opcional).
     * @param {string} [description] - La descripción del Embed (opcional).
     * @returns {MessageEmbed} El objeto Embed de error creado.
     */
    error(title, description) {
        const embed = new MessageEmbed().setColor("RED");
        if (typeof title === "string") embed.setTitle(title);
        if (typeof description === "string") embed.setDescription(description);
        return embed;
    }

    /**
     * Crea un objeto Embed de éxito con el título y descripción especificados.
     * @param {string} [title] - El título del Embed (opcional).
     * @param {string} [description] - La descripción del Embed (opcional).
     * @returns {MessageEmbed} El objeto Embed de éxito creado.
     */
    success(title, description) {
        const embed = new MessageEmbed().setColor("GREEN");
        if (typeof title === "string") embed.setTitle(title);
        if (typeof description === "string") embed.setDescription(description);
        return embed;
    }

    /**
     * Crea un objeto Embed de advertencia con el título y descripción especificados.
     * @param {string} [title] - El título del Embed (opcional).
     * @param {string} [description] - La descripción del Embed (opcional).
     * @returns {MessageEmbed} El objeto Embed de advertencia creado.
     */
    warn(title, description) {
        const embed = new MessageEmbed().setColor("ORANGE");
        if (typeof title === "string") embed.setTitle(title);
        if (typeof description === "string") embed.setDescription(description);
        return embed;
    }
}

module.exports = Base;
