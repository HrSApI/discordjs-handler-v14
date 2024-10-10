<div align="center">
	<br />
	<p>
		<a href="https://mrhrs.xyz"><img src="https://cdn.discordapp.com/attachments/1105785961536827394/1221706403744452608/HrSTextLogo.png?ex=6708c4c0&is=67077340&hm=40e819c37696209e3644b66ba18352f82022cd51759af976dee933d3ff3e6a46&" width="546" alt="mrhrs" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.gg/6CuMuv5Yzg"><img src="https://img.shields.io/discord/977544174125609010?logo=discord&color=5865F2" alt="Discord server" /></a>
        <a href="https://youtube.com/@Mr_HrS"><img src="https://img.shields.io/youtube/channel/subscribers/UCVmz5jIwiQEXv0sGw1fPIbQ" alt="Youtube Subscribers" /></a>
		<img src="https://komarev.com/ghpvc/?username=HrSApI" alt="views on github" />
		<a href="https://paypal.me/MMahmoud345?country.x=SA&locale.x=ar_EG"><img src="https://img.shields.io/badge/-donate-blue.svg?logo=paypal&style=for-the-badge" alt="NPM downloads" /></a>
    </p>

</div>

# Discord.js Command Handler

## Overview

This project is a command handler for a Discord bot built using the [Discord.js](https://discord.js.org/) library. It enables the bot to easily manage and execute slash commands in a structured and organized manner. This setup is ideal for developers looking to streamline their Discord bot's functionality.

## Features

- **Slash Command Support**: Easily add and manage slash commands.
- **Modular Structure**: Each command is defined in its own file, promoting code organization and maintainability.
- **Embed Support**: Use Discord embeds for rich message formatting.
- **User and Bot Management**: List users and bots in the server with simple commands.

## Getting Started

### Prerequisites

- Node.js (v16.9.0 or higher)
- Discord.js (v14 or higher)
- A Discord bot token

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HrSApI/discordjs-handler-v14.git
   cd discordjs-handler-v14
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your bot token and mongodbURL:
   - Create a `.env` file in the root directory of the project and add your token:
     ```plaintext
     TOKEN=your_bot_token_here
     MONGO_URL=your_mongodb_url_here
     ```

### Usage

1. Start the bot:

   ```bash
   node index.js
   ```

2. Interact with your bot on Discord using the registered slash commands.

## Commands

- `/list`: Displays a list of users and bots in the server.
- `/ping`: Displays the bot's response time.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Discord.js](https://discord.js.org/) for the powerful library that makes building Discord bots easier.
- [Node.js](https://nodejs.org/) for the JavaScript runtime.
