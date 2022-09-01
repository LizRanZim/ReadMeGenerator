

const licenseChosen = {
  Apache: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',

  GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
// look at syntax so I'm specifying license
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) { 
 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  // let title = `${response.title}`;
  // console.log(title);
  // let description = `${response.description}`;
  // console.log(description);
  // let installation = `${response.installation}`;
  // console.log(installation);
  // let usage = `${response.usage}`;
  // console.log(usage);
  // let contribution = `${response.contribution}`;
  // console.log(contribution);
  // let testing = `${response.testing}`;
  // console.log(testing);
  // let license = `${response.license}`;
  // console.log(license);
  // let gitHubuser = `${response.gitHubuser}`;
  // console.log(gitHubuser);
  // let email = `${response.email}`;
  // console.log(email);

  return `# ${response.title}
    ## ${response.description}`

    ;
}
// all one giant string use line break syntax /n----- look that up


module.exports = generateMarkdown;
