// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  const badgeUrl = `https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg`;
  const licenseUrl = renderLicenseLink(license);
  
  return `[![${license} license](${badgeUrl})](${licenseUrl})`;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "BSD":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  
  return `## License \n This project is licensed under the ${license} license. To learn more about this license, please click [here](${renderLicenseLink(license)}).`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please visit the repository on GitHub (${data.github}), or feel free to email me at ${data.email}.

## Credits
${data.credits}
`;
}

module.exports = generateMarkdown;
