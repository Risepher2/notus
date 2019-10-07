const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "userinfo",
    aliases: ["whois"],
    category: "info",
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        let uEmbed = new RichEmbed()
        .setColor(colours.pink)
        .setTitle("User Information")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Username", `${message.author.username}`, true)
        .addField("Discriminator", `${message.author.discriminator}`, true)
        .addField("User ID", `${message.author.id}`, true)
        .addField("Status", `${message.author.presence.status}`, true)
        .addField("Created At", `${message.author.createdAt}`, true)
        .setFooter(`${bot.user.tag}`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed});
    }
}

