const {
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  ChatInputCommandInteraction,
  Client,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Displays the bot's response time"),

  /**
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    const pingEmbed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle("🏓 Pong!")
      .setDescription(`The bot's response time is **${client.ws.ping}ms**`)
      .setThumbnail(client.user.avatarURL())
      .setFooter({ text: "Stay fast, stay connected!" });

    await interaction.reply({ embeds: [pingEmbed] });
  },
};
