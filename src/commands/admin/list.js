const {
  SlashCommandBuilder,
  EmbedBuilder,
  Colors,
  ChatInputCommandInteraction,
  Client,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("list")
    .setDescription("Displays users and bots in the server"),

  /**
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    // Fetching all members from the server
    const members = await interaction.guild.members.fetch();

    // Separating users and bots
    const users = members.filter(member => !member.user.bot).map(member => member.user.username).join(", ") || "No users found.";
    const bots = members.filter(member => member.user.bot).map(member => member.user.username).join(", ") || "No bots found.";

    // Creating the embed
    const listEmbed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle("User and Bot List")
      .setDescription(`**Users:**\n${users}\n\n**Bots:**\n${bots}`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter({
        text: `Requested by ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      });

    // Sending the reply
    await interaction.reply({ embeds: [listEmbed] });
  },
};
