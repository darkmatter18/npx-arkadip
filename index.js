#!/usr/bin/env node

'use strict'

const clear = require('clear');
const chalk = require('chalk');
const boxen = require('boxen');
const inquirer = require("inquirer");
const open = require('open');

clear();

const data = {
    name: chalk.green.bold("Arkadip Bhattacharya"),

    work: `${chalk.white("Computer Science and Engineering Student at")} ${chalk.hex("#2b82b2").bold("GCETTB")}`,
    labelWork: chalk.white.bold("Work:"),

    site: chalk.greenBright.bold("https://www.arkadip.me"),
    
    github: chalk.gray("https://github.com/") + chalk.green("darkmatter18"),
    labelGitHub: chalk.white.bold("GitHub:"),

    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("arkadip"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),

    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("ArkadipB21"),
    labelTwitter: chalk.white.bold("Twitter:"),

    npx: chalk.red("npx") + " " + chalk.white("arkadip"),
    labelCard: chalk.white.bold("Card:"),

    email: 'in2arkadipb13@gmail.com',
    resume_link: "https://drive.google.com/file/d/1CPX4atHgFKZCr6-dUlPXgcdVza6s5w_0/view?usp=sharing"
}

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.work}`,
        ``,
        `${data.site}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
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

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open(`mailto:${data.email}`);
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `See my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    open(data.resume_link);
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

console.log(me);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());