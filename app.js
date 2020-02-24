const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

prompt([
    {
        type: "input",
        name: 'githubUsername',
        message: 'What is your Github Username?'
    }
]) .then((response) => {
    fs.writeFile('dev.md', `Github Username: ${response.githubUsername}`, function (err) {
        if (err) throw err;
        console.log('File created successfully.');
    })
})