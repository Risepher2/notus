const { RichEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "userinfo",
    aliases: ["whois"],
    category: "info",
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        let uEmbed = new RichEmbed()
        .setColor("#e3ae42")
        .setTitle("User Information")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Username", `${message.author.username}`, true)
        .addField("Discriminator", `${message.author.discriminator}`, true)
        .addField("User ID", `${message.author.id}`, true)
        .addField("Status", `${message.author.presence.status}`, true)
        .addField("Created At", `${message.author.createdAt}`, true)
        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
        message.channel.send({embed: uEmbed});
    }
}

