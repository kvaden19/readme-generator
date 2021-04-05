// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: require generateMarkdown

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
  // TODO: write to a .md file
  .then((answers) => {
    // TODO: adapt - call generateMarkdown
    const filename = `${answers.title.toLowerCase().split(' ').join('')}-README.md`;

    // TODO: adapt - write to md file
    fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
