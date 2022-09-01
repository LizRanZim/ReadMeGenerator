// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const genMd = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',

    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
        
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the testing instructions for your project?',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'How do you want to license your project?',
        name: 'license',
        choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License',],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubuser',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use fs to write a markdown file
    fs.writeFile(fileName, data, function(err) {
        err ? console.error(err) : console.log('Written to file')
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const markDown = generateMarkdown(response);
       console.log(markDown);  
        writeToFile('LizFile.md',markDown)   
    });
    // use inq to ask questions
    // then get answers
    // -- use answers to gen markdown
    // *** const mdAsString = genMd(response) // assuming you called you inq obj response
    // // -- call writeToFile
};

// Function call to initialize app
init();

// Office hours: how to pass the data to the generate markdown function so it can use the data to create the readme file

// Next steps create a github repository and do some commits of this code while you have node index.js working

// stringify the readme file syntax from your sample file and put the variables in it, and put that in the generate markdown function to see if you can start generating a basic file with the data


