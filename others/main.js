// Import necessary classes from discord.js library
const { Client, GatewayIntentBits, Partials, Events } = require("discord.js");

// Create a new instance of the Client
const client = new Client({
  // Define the intents for the client; intents are used to specify which events the bot should listen to
  intents: [Object.keys(GatewayIntentBits)], // This allows the bot to receive all events specified in GatewayIntentBits
  // Define the partials for the client; partials allow the bot to work with incomplete data for certain events
  partials: [Object.keys(Partials)], // This allows the bot to handle partial structures for messages, users, etc.
});

// Event listener that triggers when the client is ready
client.on(Events.ClientReady, (c) => {
  // Log the client's ID when it's successfully logged in
  console.log(`Logged in as: ${c.user.id}`);
});

// Log in to Discord with the bot's token stored in the environment variables
client.login("BOT_TOKEN_HERE");
