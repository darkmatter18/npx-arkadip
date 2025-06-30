#!/usr/bin/env node

'use strict'

const clear = require('clear');
const chalk = require('chalk');
const boxen = require('boxen');
const inquirer = require("inquirer");
const open = require('open');
const moment = require('moment');

clear();

const expDuration = moment.duration(moment(moment.now()).diff(moment([2021, 11, 20])));

const experiences = [
    {
        company: "Cognitree",
        role: "Software Engineer",
        startDate: moment([2025, 3, 1]),
        endDate: moment(moment.now())
    },
    {
        company: "Nimblework, Inc.",
        role: "Senior Software Engineer",
        startDate: moment([2024, 6, 1]) ,
        endDate: moment([2025, 2, 1])
    },
    {
        company: "Nimblework, Inc.",
        role: "Software Engineer",
        startDate: moment([2021, 11, 20]),
        endDate: moment([2024, 5, 1])
    },
]

const data = {
    name: chalk.green.bold("Arkadip Bhattacharya"),

    experienceYrs: `${chalk.green(expDuration.asYears().toFixed(2))} Yrs (${chalk.green.bold(Math.round(expDuration.asDays()))} Days)`,
    labelExperienceYrs: chalk.gray("Total Experience:"),

    work: `${chalk.cyan(experiences[0].role)} at ${chalk.magenta.bold(experiences[0].company)} ${chalk.yellow(`(${moment(experiences[0].startDate).format("MMM YYYY")} - now)`)}`,
    labelWork: chalk.gray("Currently working:"),

    prevExperiences : experiences.slice(1).map(experience => `${chalk.cyan(experience.role)} at ${chalk.magenta.bold(experience.company)} (${chalk.yellow(moment(experience.startDate).format("MMM YYYY"))} - ${chalk.yellow(moment(experience.endDate).format("MMM YYYY"))})`),

    github: chalk.gray("https://github.com/") + chalk.green("darkmatter18"),
    labelGitHub: chalk.white.bold("GitHub:"),

    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("arkadip"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),

    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("ArkadipB21"),
    labelTwitter: chalk.white.bold("Twitter:"),

    site: "https://www.arkadip.dev",
    email: 'hi@arkadip.dev',
    resume_link: "https://arkadip.dev/resume.pdf"
}

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${chalk.italic("I’m a software engineer specializing in building Microservice, scalable,")}`,
        `${chalk.italic("highly available, and fault tolerant, cloud native applications.")}`,
        ``,
        `${data.labelExperienceYrs} ${data.experienceYrs}`,
        ``,
        `${data.labelWork} ${data.work}`,
        ``,
        chalk.gray("Previous Experiences"),
        data.prevExperiences.join("\n"),
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${chalk.greenBright.bold(data.site)}`,
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
                name: `Send me an ${chalk.greenBright.bold("email")}.`,
                value: () => {
                    open(`mailto:${data.email}`);
                    console.log(`${chalk.greenBright.bold("Done")}, see you soon at inbox.\n`);
                }
            },
            {
                name: `See my ${chalk.magentaBright.bold("Resume")}.`,
                value: () => {
                    open(data.resume_link);
                    console.log(`${chalk.greenBright.bold("Done")}, Hope you like my resume. :)\n`);
                }
            },
            {
                name: `Visit my ${chalk.yellowBright.bold("Portfolio")}.`,
                value: () => {
                    open(data.site);
                    console.log(`${chalk.greenBright.bold("Done")}, Hope you like my Portfolio. \n`);
                }
            },
            {
                name: `Just ${chalk.red.bold("bye")}.`,
                value: () => {
                    console.log(chalk.gray.bold.italic("Hasta la vista.\n"));
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
