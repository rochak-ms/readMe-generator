// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
    if(license != "null") {
    badge = '![License badge](https://shields.io/badge/license-' + license + '-blue.svg)';
    }
    return badge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // selects the correct license link for the selected license
  switch(license){
    case 'MIT':
      licenseLink = 'https://mit-license.org/';
      break;
    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.html';
      break;  
    case 'GPL':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'BSD':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSec = "";
  if (license != null) {
  licenseSec = licenseSec + ' \n Please visit (' + renderLicenseLink(license) + ') for details information.\n';
  }
  return licenseSec;
}

//function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  #
  ${data.description}

  ## Table of Contents
  #
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  #
  ${data.installation}

  ## Usage
  #
  ${data.usage}

  ## License
  #
  ${renderLicenseBadge(data.license)} 
  ${renderLicenseSection(data.license)}

  ## Contributing
  #
  ${data.contributors}

  ## Tests
  ${"```\n" + data.test + "\n```"}


  ## Questions
  #
  If you have any questions about the project, please contact me at ${data.email}. Or you can fine me [Here](https://github.com/${data.githubuName}) on GitHub.
`;
};

module.exports = generateMarkdown;
