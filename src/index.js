require('dotenv').config();


const Commando = require('discord.js-commando');
const path = require('path');
const consola = require('consola');
const log = consola.withScope('discord');

const client = new Commando.Client({
  commandPrefix: process.env.COMMAND_PREFIX || '$',
  owner: process.env.BOT_OWNER && process.env.BOT_OWNER.split(/, ?/),
  disableEveryone: true,
  nonCommandEditable: false,
  unknownCommandResponse: false,
});

client.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands({
    help: false,
  })
  .registerGroups([
    ['flarum', 'Flarum Discuss'],
    ['pusher', 'Pusher'],
  ])
  .registerCommandsIn(path.join(__dirname, 'commands'));
