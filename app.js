const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

prompt([
    {
        type: "input",
        name: 'githubUsername',
        message: 'What is your Github Username?'
    }
]) .then((response) => {
    console.log(response);
})


