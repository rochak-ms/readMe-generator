// Including packages needed for this application
const fs = require('fs');
const inquire = require('inquire');
const { default: inquirer } = require('inquirer');

// linking generateMarkdown.js for ReadME
const generateReadME = require('./utils/generateMarkdown');

// Array of questions for user input (using arrow function here)
const questions = () => {
  // using inquirer.prompt to prompt questions to user
  return inquirer.prompt([
    {
      // project Title
      type: 'input',
      name: 'title',
      message: 'Please enter your Project Title',
    },
    {
      // project description
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your Project',
    },
    {
      // Installation Instructions
      type: 'input',
      name: 'installation',
      message: 'Please provide the installation instructions for your project',
    },
    {
      // project usage
      type: 'input',
      name: 'usage',
      message: 'Please enter a usage description for your project',
    },
    {
      // Contribution guidelines
      type: 'input',
      name: 'contributors',
      message: 'Please provide the contribution guidelines for your project',
    },
    {
      // test instructions
      type: 'input',
      name: 'test',
      message: 'What command should be run to run the test',
      default: 'npm test'
    },
    {
      // project license
      type: 'list',
      name: 'license',
      message: 'Please choose the license used in your Project',
      choices: ['MIT','apache-2.0','mpl-2.0','isc','gpl-3.0']
    },
    {
      // GitHub username
      type: 'input',
      name: 'github-uName',
      message: 'Please enter your GitHub username'
    },
    {
      // user Email
      type: 'input',
      name: 'email',
      message: 'Please enter your email address'
    }
  ])
}


//function to write README file  using file system
const writeFile = (data) => {
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
.then(answers => {
  return writeFile(data);
})
// catching errors
.catch(err => {
  console.log(err);
});
