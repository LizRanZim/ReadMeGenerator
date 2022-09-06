

const licenseChosen = {
  'Apache License v2.0': {
    badge: '![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)',
    link: 'https://opensource.org/licenses/Apache-2.0',
  },

  'GNU General Public License v3.0': {
    badge: '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },

  'MIT License': {
    badge: '![License](https://img.shields.io/badge/License-MIT-yellow.svg)',
    link: 'https://opensource.org/licenses/MIT'
  }

  // look at syntax so I'm specifying license
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) {
    return licenseChosen[license].badge
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return licenseChosen[license].link
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {



  return `# ${response.title}
# Description
 ${response.description}
  
# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

# Installation 
${response.installation}

# Usage
${response.usage}

# License
${response.license}

${renderLicenseBadge(response.license)}

${renderLicenseLink(response.license)}

# Contributing
${response.contribution}

# Tests
${response.testing}

# Questions

Contact the creator of this app using the links below.

Github: https://github.com/` + `${response.gitHubuser}


Email: ${response.email}
    
    `

    ;
}
// all one giant string use line break syntax /n----- look that up


module.exports = generateMarkdown;
