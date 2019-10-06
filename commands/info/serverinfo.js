const { RichEmbed } = require("discord.js");

module.exports = {
    name: "serverinfo",
    category: "info",
    description: "Returns server information",
    run: async (client, message, args) => {
        let sicon = message.guild.iconURL;
        let embed = new RichEmbed()
        .setTitle("Server Information")
        .setDescription(`Information about ` + message.guild.name)
        .setColor("#e3ae42")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name, true)
        .addField("Created On", message.guild.createdAt, true)
        .addField("You Joined", message.member.joinedAt, true)
        .addField("Total Members", message.guild.memberCount, true);
    
        message.channel.send(embed);
    }
}
