#!/usr/bin/env node

'use strict'

const clear = require('clear');
const chalk = require('chalk');
const boxen = require('boxen');

clear();

const data = {
    name: chalk.green.bold("Arkadip Bhattacharya"),

    work: `${chalk.white("Computer Science and Engineering Student at")} ${chalk.hex("#2b82b2").bold("GCETTB")}`,
    labelWork: chalk.white.bold("Work:"),
    
    github: chalk.gray("https://github.com/") + chalk.green("darkmatter18"),
    labelGitHub: chalk.white.bold("GitHub:"),

    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("arkadip"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),

    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("ArkadipB21"),
    labelTwitter: chalk.white.bold("Twitter:"),

    web: chalk.cyan("https://www.arkadip.me"),
    labelWeb: chalk.white.bold("Web:"),

    npx: chalk.red("npx") + " " + chalk.white("arkadip"),
    labelCard: chalk.white.bold("Card:")
}

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("I am currently studying for")} ${chalk.bold("GATE 2022")}`,
        ``,
        `${chalk.italic("My inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        align: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"

    }
);

console.log(me);