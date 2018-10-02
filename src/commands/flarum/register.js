const { Command } = require('discord.js-commando');

class RegisterCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'register',
      group: 'flarum',
      memberName: 'register',
      description: 'Register your Flarum forum on the bot',
      examples: ['register https://discuss.flarum.org'],
      userPermissions: ['ADMINISTRATOR'],
      throttling: {
        usages: 1,
        duration: 60,
      },
      guildOnly: true,
      args: [
        {
          key: 'url',
          prompt: 'Provide the URL to your Flarum forum?',
          type: 'string'
        },
        {
          key: 'token',
          prompt: 'Provide a master token to the forum?',
          type: 'string'
        }
      ]
    });
  }

  run(msg, {url}) {
    if (!this.pattern) {
      this.pattern = this.client.dispatcher.buildCommandPattern();
    }
    if (!this.pattern.test(msg.content)) {
      return;
    }
  }
}

module.exports = RegisterCommand;
