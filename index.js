#!usr/bin/env/node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowlitle = chalkanimation.rainbow(`lets start calculation`); //start
    await sleep();
    rainbowlitle.stop();
    console.log(`_____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);
}
welcome();
async function askQuestion() {
    await inquirer
        .prompt([{
            type: "list",
            name: "operater",
            massage: "which operation you want to perform",
            choices: ["addition", "Subraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2:"
        },
    ])
        .then((Answers) => {
        console.log(Answers);
        if (Answers.operater == "addition") {
            console.log(chalk.yellow(`${Answers.num1}+${Answers.num2}=${Answers.num1 + Answers.num2}`));
        }
        else if (Answers.operater == "subtraction") {
            console.log(chalk.blue(`${Answers.num1}-${Answers.num2}=${Answers.num1 - Answers.num2}`));
        }
        else if (Answers.operater == "Multiplication") {
            console.log(chalk.green(`${Answers.num1}*${Answers.num2}=${Answers.num1 * Answers.num2}`));
        }
        else if (Answers.operater == "Division") {
            console.log(chalk.white(`${Answers.num1}/${Answers.num2}=${Answers.num1 / Answers.num2}`));
        }
    });
}
;
askQuestion();
async function startagain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to countine?press y or n:"
        });
    } while (again.restart == `y` || again.restart == `y` || again.restart == `yes` || again.restart == `yes`);
}
startagain();
