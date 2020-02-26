const generateMarkdown = require('./utils/generateMarkdown.js');
const userInfo = require('./utils/api.js');
const prompt = require('inquirer').createPromptModule()
const axios = require('axios')
const path = require('path');
const api = require('./utils/api.js');
const fs = require('fs')

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
        {
            type: 'input',
            name: 'title',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'use',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'license',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'test',
            message: questions[7]
        }   
    ]) .then(response => {
        
        api
        .getUser(response.user)
        .then(({ data }) => {
        
          writeToFile("README.md", generateMarkdown({ ...data, ...response }));
        })
    })
}

init();


