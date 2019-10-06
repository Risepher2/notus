module.exports = {
    name: "eval",
    category: "other",
    description: "Evaluates code.",
    run: async (client, message, args) => {
        if(message.author.id !== "596879758244053002") return;
        try {
            const code = args.join(" ");
            let evaled = eval(code);
       
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
       
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          }
    }
}