// Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// linking generateMarkdown.js for ReadME
const generateReadME = require('./utils/generateMarkdown.js');

// Array of questions for user input (using arrow function here)
const questions = () => {
  // using inquirer.prompt to prompt questions to user
  return inquirer.prompt([
    {
      // project Title
      type: 'input',
      name: 'title',
      message: 'Please enter your Project Title:\n',
    },
    {
      // project description
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your Project:\n',
    },
    {
      // Installation Instructions
      type: 'input',
      name: 'installation',
      message: 'Please provide the installation instructions for your project:\n',
    },
    {
      // project usage
      type: 'input',
      name: 'usage',
      message: 'Please enter a usage description for your project:\n',
    },
    {
      // Contribution guidelines
      type: 'input',
      name: 'contributors',
      message: 'Please provide the contribution guidelines for your project:\n',
    },
    {
      // test instructions
      type: 'input',
      name: 'test',
      message: 'What command should be run to run the test:\n',
      default: 'npm test'
    },
    {
      // project license
      type: 'list',
      name: 'license',
      message: 'Please choose the license used in your Project:',
      choices: ['None','MIT','Apache','GPL','BSD']
    },
    {
      // GitHub username
      type: 'input',
      name: 'githubuName',
      message: 'Please enter your GitHub username:\n'
    },
    {
      // user Email
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:\n'
    }
  ]);
};


//function to write README file  using file system
const writeFile = data => {
  fs.writeFile('ReadMe.md', data, err => {
    if (err) {
      console.log(err);
      return;
    }else{
      console.log('ReadMe file has been generated successfully');
    }
    })
};

//function to initialize app
questions()
// getting user input
.then(answers => {
  return generateReadME(answers);
})
// displaying data on page
.then(data => {
  return writeFile(data);
})
// catching errors
.catch(err => {
  console.log(err);
});
