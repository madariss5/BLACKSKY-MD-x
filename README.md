# CASPER-XMD WhatsApp Bot

A feature-rich WhatsApp Multi-Device bot with multiple plugins including AI, media handling, group management, and fun commands.

## Features

- **Group Management**
  - Kick, add, promote, demote members
  - Warning system with auto-kick
  - Group link generation
  - Admin-only commands

- **Media Handling**
  - Sticker creation
  - Image to sticker conversion
  - YouTube video downloads
  - Media format conversion

- **AI Integration**
  - OpenAI-powered chat responses
  - Smart conversation handling
  - AI image generation (coming soon)

- **Fun & Social**
  - Interactive commands (!fuck, !horny, !cum)
  - User leveling system
  - XP tracking
  - Profile management

- **Search Tools**
  - Google search
  - Wikipedia lookup
  - YouTube search

- **Owner Controls**
  - User ban/unban system
  - Broadcast messages
  - Eval command
  - Bot management

## Setup & Installation

1. Clone this repository
```bash
git clone https://github.com/Casper-Tech-ke/CASPER-XMD.git
cd CASPER-XMD
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file with:
```env
OPENAI_API_KEY=your_openai_api_key
```

4. Start the bot
```bash
npm start
```

5. Scan the QR code with WhatsApp to connect

## Commands

### Admin Commands
- `!kick @user` - Remove user from group
- `!add @user` - Add user to group
- `!promote @user` - Make user admin
- `!demote @user` - Remove admin status
- `!link` - Get group invite link
- `!warn @user [reason]` - Warn a user
- `!unwarn @user` - Remove warning
- `!warnlist` - Show all warnings

### Owner Commands
- `!ban @user` - Ban user from using bot
- `!unban @user` - Unban user
- `!banlist` - Show banned users
- `!broadcast [message]` - Send message to all groups
- `!eval [code]` - Execute JavaScript code
- `!restart` - Restart the bot

### Fun Commands
- `!fuck @user` - Fun interaction
- `!horny` - Check horny level
- `!cum` - Fun interaction

### Leveling Commands
- `!level` - Show your level
- `!xp` - Show XP progress
- `!profile` - Show detailed profile
- `!me` - Alternative for profile
- `!levelup` - Test leveling
- `!leveling` - Show leveling stats

### Media Commands
- `!sticker` - Create sticker from image
- `!toimg` - Convert sticker to image
- `!yt [url]` - Download YouTube video

### Search Commands
- `!google [query]` - Search Google
- `!wiki [query]` - Search Wikipedia

### AI Commands
- `!ai [prompt]` - Chat with AI
- `!ask [question]` - Alternative for AI chat
- `!gpt [prompt]` - Another AI command

## Deployment

### 乂 D E P L O Y - P L A T F O R M S

**Option 1: Deploy on Heroku**
1. [Create an Account on Heroku](https://signup.heroku.com/) if you haven’t already.
2. Click the button below to deploy directly on Heroku:
   <br>
   <a href='https://heroku.com/deploy?template=https://github.com//Casper-Tech-ke/CASPER-XMD' target="_blank">
      <img alt='Deploy on Heroku' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=heroku&logoColor=white'/>
   </a>


**Option 2: Deploy on Railway**
1. [Create an Account on Railway](https://railway.app/login) if you don’t have one.
2. Click the button below to deploy using Railway:
   <br>
   <a href='https://railway.app/' target="_blank">
      <img alt='Deploy on Railway' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=railway&logoColor=white'/>
   </a>


**Option 3: Deploy on Render**
1. [Create an Account on Render](https://dashboard.render.com/register) if you don’t have one.
2. Click the button below to deploy using Render:
   <br>
   <a href='https://dashboard.render.com' target="_blank">
      <img alt='Deploy on Render' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=render&logoColor=white'/>
   </a>


**Option 4: Deploy on Replit**
1. [Create an Account on Replit](https://repl.it) if you don’t have one.
2. Click the button below to deploy using Replit:
   <br>
   <a href='https://repl.it/github/' target="_blank">
      <img alt='Deploy on Replit' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=replit&logoColor=white'/>
   </a>


**Option 5: Deploy on PANEL**
1. [Create an Account on panel](https://dashboard.katabump.com/auth/login#ed42a4) if you don’t have one.
2. Click the button below to deploy using Panel:
   <br>
   <a href='https://dashboard.katabump.com/auth/login#ed42a4' target="_blank">
      <img alt='Deploy on Panel' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=replit&logoColor=white'/>
   </a>


**Option 6: Github Workflows**

<b>乂 COPY WORKFLOW CODE</b></br>
```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start

```

**Option 7: Code-Spaces**

**Option 8: Or Any NodeJS Enviroment**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.