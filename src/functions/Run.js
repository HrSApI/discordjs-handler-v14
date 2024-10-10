const {
    REST,
    Collection,
    ApplicationCommandType,
    Events,
    Routes,
  } = require("discord.js");
  const path = require("path");
  const ascii = require("ascii-table");
  const { readdirSync } = require("node:fs");
  const EventsTable = new ascii("Events").setJustify();
  const SlashTable = new ascii("SlashCommands").setJustify();
  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
  const { connect } = require("mongoose");
  const MongoDBURL = process.env.MONGO_URL;
  
  // =======-> Database
  async function connectToDatabase() {
    try {
      await connect(MongoDBURL).then(async (connection) => {
        console.log(
          `🟢 | MongoDB connected as ${connection.connections[0].name}`
        );
      });
    } catch (error) {
      console.log(`🔴 | Unable to connect to MongoDB!`);
      console.error(error);
    }
  }
  
  // =======-> Events
  function EventsHandler(client) {
    const eventDir = path.join(__dirname, "../events");
    readdirSync(eventDir).forEach((folder) => {
      const eventFiles = readdirSync(path.join(eventDir, folder)).filter((file) =>
        file.endsWith(".js")
      );
      for (const file of eventFiles) {
        const event = require(path.join(eventDir, folder, file));
        if (event.name) {
          if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
          } else {
            client.on(event.name, (...args) => event.execute(...args, client));
          }
          EventsTable.addRow(event.name, "🟢 Working");
        } else {
          EventsTable.addRow(file, "🔴 Not working");
        }
      }
    });
    console.log(EventsTable.toString());
  }
  
  // =======-> Slash Commands
  async function SlashCommandEvent(client) {
    const commands = [];
    client.commands = new Collection();
    const commandsDir = path.join(__dirname, "../commands");
  
    readdirSync(commandsDir).forEach((folder) => {
      const commandFile = readdirSync(path.join(commandsDir, folder)).filter(
        (file) => file.endsWith(".js")
      );
      for (const file of commandFile) {
        const command = require(path.join(commandsDir, folder, file));
        if (command.name && command.description) {
          commands.push({
            type: ApplicationCommandType.ChatInput,
            name: command.name,
            description: command.description,
            options: command.options || [],
          });
          client.commands.set(command.name, command);
          SlashTable.addRow(`/${command.name}`, "🟢 Working");
        } else if (command.data?.name && command.data?.description) {
          commands.push(command.data.toJSON());
          client.commands.set(command.data.name, command);
          SlashTable.addRow(`/${command.data.name}`, "🟢 Working");
        } else {
          SlashTable.addRow(file, "🔴 Not Working");
        }
      }
    });
    console.log(SlashTable.toString());
  
    client.once(Events.ClientReady, async (c) => {
      try {
        const data = await rest.put(Routes.applicationCommands(c.user.id), {
          body: commands,
        });
        console.log(
          `🟢 | Started refreshing ${commands.length} application (/) commands.\n🟢 | Successfully reloaded ${data.length} application (/) commands.`
        );
      } catch (error) {
        console.error(error);
      }
    });
  }
  
  // =======-> Run to Build the environment
  async function Run(client) {
    connectToDatabase();
    EventsHandler(client);
    SlashCommandEvent(client);
  }
  
  module.exports = { EventsHandler, Run };
  