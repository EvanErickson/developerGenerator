const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();



const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
const axios = require('axios')

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