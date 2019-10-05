module.exports = {
    name: "status",
    category: "info",
    description: "Shows bot's status",
    run: async (client, message, args) => {
        message.channel.send(`This command is under development. Please try again later.`);

    }
}
