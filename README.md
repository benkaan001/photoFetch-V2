<h1 align ="center"> Fetch API || MySQL || Express </h1>

<h2 align="center">Photo Fetch </h2>
<p align="center">
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/>  &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"  /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"  /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" /> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"> &nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE"/> &nbsp;&nbsp;
    
</p>

## Table of Contents

- [Description](#description)
- [Preview](#preview)
- [Installation](#installation)
- [Tests](#tests)
- [Demo](#demo)
- [Contributions](#contributions)
- [License](#license)

## Description

## Preview

![gif](https://github.com/benkaan001/photoFetch-V2/blob/public/assets/photoFetch2.gif)

## Installation

In the root directory of your project, create a `.env` file with the following credentials:

`DB_NAME='photoFetch_db' DB_USER='YOUR_MYSQL_USERNAME' DB_PW='YOUR_MYSQL_PASSWORD' SECRET=YOUR_SESSION_SECRET`

`npm install` to install

To connect to the MySQL shell, run the following command on your terminal and enter user credentials for MySQL:

`mysql -u root -p`

To create the schema from the MySQL shell, then, run:

`source db/schema.sql`

To exit mySQL, run:

`exit`

Then, optionally, seed the database with the following command:

`npm run seeds`

Lastly, initate the server with:

`npm start` or `nodemon start`

To disconnect the server, press `command+C`

## Tests

Check out the deployed application on
[heroku](https://afternoon-coast-77459.herokuapp.com)

## Contributions

:octocat: [Ben Kaan](https://www.github.com/benkaan001)

Contributions are welcome!

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
