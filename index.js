const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
const axios = require('axios')

// Questions array
const questions = [
    "What is your GitHub username?",
    "What is the title of your project?",
    'Please enter a project description:',
    "Please enter an installation guide:",
    "How does the user use this app?",
    "What does the user need to know about the license?",
    "What does the user need to know about contributions?",
    "What command would you run to test this app?"
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Prompt with all the questions
function init() {
    prompt([
        {
            type: 'input',
            name: 'username',
            message: questions[0]
        },
    ]) .then(response => {
        fs.writeFile('dev.md', `Github Username: ${response.githubUsername}`, function (err) {
            if (err) throw err;
            console.log('File created successfully.');
        })
    })
}

init();


