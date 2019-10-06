const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./index.js', { token: 'NjI5MTAwNTc5NjMyODQwNzA0.XZU1nA.Z4NWaJIxRyiOizuZpsVwo1srMUE' });

manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}.`));
