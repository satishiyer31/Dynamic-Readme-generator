// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of the Readme?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is repo description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide any installation instructions',
        name: 'installation_instruction',

    },
    {
        type: 'input',
        message: 'Please provide any usage information',
        name: 'usage_info',
    },
    {
        type: 'input',
        message: 'How can other users contribute?',
        name: 'contribution_guidelines',
    },
    
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test_instructions',
    },
    
    {
        type: 'input',
        message: 'What is your Github username',
        name: 'username',
    },
        

    {   type: 'input',
        message: 'What is your Email',
        name: 'email',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data.length);

   var readmeText = 
   `#Title:
    ${data.title}\n
   ##Description:
   ${data.description}\n
   ##Installation Instructions:
   ${data.installation_instruction}\n
    ##Usage Info:
   ${data.usage_info}\n
   ##Contribution Guidelines:
   ${data.contribution_guidelines}\n
   ##Test:
   ${data.test_instructions}\n
   ##Questions:
    ###Github: ${data.username}\n
    ###Email: ${data.email}\n
   `;

    // for( var keyIndex in data) {
    //     fs.appendFile(fileName, data[keyIndex], (err) =>
    //      err ? console.error(err) : console.log('Commit logged!'))
    // }
    fs.appendFile(fileName, readmeText, (err) =>
         err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then((response) => {
        // console.log(response);
        writeToFile("ReadMe2.md", response);
        
    })
}


// Function call to initialize app
init();
