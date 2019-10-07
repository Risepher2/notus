const { RichEmbed } = require("discord.js");

module.exports = {
    name: "serverinfo",
    category: "info",
    description: "Returns server information",
    run: async (client, message, args) => {
        let sEmbed = new RichEmbed()
        .setColor(colours.red)
        .setTitle("Server Information")
        .setThumbnail(message.guild.iconURL)
        .addField("Guild Name", `${message.guild.name}`, true)
        .addField("Guild ID", `${message.guild.id}`, true)
        .addField("Guild Owner", `${message.guild.owner}`, true)
        .addField("Member Count", `${message.guild.memberCount}`, true)
        .addField("Role Count", `${message.guild.roles.size}`, true)
        .setFooter(`${bot.user.tag}`, bot.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});
    }
}

