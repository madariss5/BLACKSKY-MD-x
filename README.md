# CASPER-XMD

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

   
   **Option 4: Deploy on PANEL**
1. [Create an Account on panel](https://dashboard.katabump.com/auth/login#ed42a4) if you don’t have one.
2. Click the button below to deploy using Panel:
   <br>
   <a href='https://dashboard.katabump.com/auth/login#ed42a4' target="_blank">
      <img alt='Deploy on Panel' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=replit&logoColor=white'/>
   </a>

   
   **Option 5: Github Workflows**
  
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

   
   **Option 6: Code-Spaces**

   **Option 9: Or Any NodeJS Enviroment**
