const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs"); 

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the name of your Project?",
        name: "title"
    },
    {
        type: "input",
        message: `Please enter a description of your project.`,
        name: "Description"
    },
    {
        type: "input",
        message: "What are the installation instructions for this project. Write NONE if no instructions",
        name: "Installation"
    },
    {
        type: "input",
        message: "How would you like your application to be used?",
        name: "Usage"
    },
    {
        type: "input",
        message: "Who contributed on this project?",
        name: "Contribution"
    },
    {
        type: "input",
        message: "what are the Test Instructions?",
        name: "Test"
    },
    {
        type: "checkbox",
        message: "Please select a license.",
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3"
        ],  
        name: "License"
    },
    
    {
        type: "input",
        message: "What is your GitHub username",
        name: "UserName"
    },
    {
        type: "input",
        message: "What is your email address",
        name: "Email"
    },

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ("Success!");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README-GENERATOR" ,generateMarkdown(data));
    })


}

// function call to initialize program
init();
