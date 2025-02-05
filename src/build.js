async function BuildIndex() {
  const { Client, GatewayIntentBits, Partials } = require("discord.js");

  const client = new Client({
    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
  });

  const { Run } = require("./functions/Run");
  await Run(client);

  client.login(process.env.TOKEN);

  process.on("uncaughtException", function (error) {
    console.error(error);
  });

  process.on("uncaughtExceptionMonitor", function (error) {
    console.error(error);
  });

  process.on("unhandledRejection", function (error) {
    console.error(error);
  });

  process.on("rejectionHandled", function (error) {
    console.error(error);
  });

  process.on("worker", function (error) {
    console.error(error);
  });

  process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    client.destroy();
    process.exit();
  });

  process.on("SIGTERM", () => {
    console.log("Caught interrupt signal");
    client.destroy();
    process.exit();
  });
}

module.exports = BuildIndex;
