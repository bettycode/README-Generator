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
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for this project. Write NONE if no instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "How would you like your application to be used?",
        name: "usage information"
    },
    {
        type: "input",
        message: "Who contributed on this project?",
        name: "contribution guidelines"
    },
    {
        type: "input",
        message: "what are the Test Instructions?",
        name: "test"
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
        name: "license"
    },
    
    {
        type: "input",
        message: "What is your GitHub username",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address",
        name: "email"
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
