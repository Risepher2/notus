const { RichEmbed } = require("discord.js");

module.exports = {
    name: "serverinfo",
    category: "info",
    description: "Returns server information",
    run: async (client, message, args) => {
        let sEmbed = new RichEmbed()
        .setColor("#e3ae42")
        .setTitle("Server Information")
        .setThumbnail(message.guild.iconURL)
        .addField("Guild Name", `${message.guild.name}`, true)
        .addField("Guild ID", `${message.guild.id}`, true)
        .addField("Guild Owner", `${message.guild.owner}`, true)
        .addField("Member Count", `${message.guild.memberCount}`, true)
        .addField("Role Count", `${message.guild.roles.size}`, true)
        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});
    }
}

