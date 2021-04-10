// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/js/generateMarkdown.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    // {
    //   type: 'editor',
    //   name: 'description',
    //   message: 'Please enter text for the Description.'
    // },
    // {
    //   type: 'editor',
    //   name: 'installation',
    //   message: 'Please enter text for the Installation Instructions.'
    // },
    // {
    //   type: 'editor',
    //   name: 'usage',
    //   message: 'Please enter text for the Usage Information.'
    // },
    // {
    //   type: 'editor',
    //   name: 'contribution',
    //   message: 'Please enter text for the Contribution Guidelines.'
    // },
    // {
    //   type: 'editor',
    //   name: 'test',
    //   message: 'Please enter text for the Test Instructions.'
    // },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['AGPL_3.0_or_later', 'GPL_3.0_or_later', 'LGPL_3.0_or_later', 'MPL_2.0', 'Apache_2.0', 'MIT', 'BSL_1.0','Unilicense']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your contact email?'
    }
  ])
  .then((answers) => {
    const filename = `README.md`;
    const filepath = `./output/${filename}`;

    fs.writeFile(filepath, generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
