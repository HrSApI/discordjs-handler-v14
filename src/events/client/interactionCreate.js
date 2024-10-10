const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);

      if (!command) {
        return interaction.reply({
          content: `⚠️ No command matching \`${interaction.commandName}\` was found.`,
          ephemeral: true,
        });
      }

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(
          `❌ Error executing command: ${interaction.commandName}`,
          error
        );
        await interaction.reply({
          content: `⚠️ An error occurred while executing the command \`${interaction.commandName}\`. Please try again later.`,
          ephemeral: true,
        });
      }
    }
  },
};
