// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown.js');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Change to README prompts for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    // {
    //   type: 'checkbox',
    //   message: 'What languages do you know?',
    //   name: 'stack',
    //   choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    // },
    // {
    //   type: 'list',
    //   message: 'What is your preferred method of communication?',
    //   name: 'contact',
    //   choices: ['email', 'phone', 'telekinesis'],
    // },
  ])
  .then((answers) => {
    const filename = `${answers.title.toLowerCase().split(' ').join('')}-README.md`;

    fs.writeFile(filename, generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
