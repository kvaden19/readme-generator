// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeString = ``;
  if (!license) {
    return badgeString
  }

  //TODO: Switch statement to pick a badge-friendly shortname based on the license
  badgeString = `![license](https://img.shields.io/badge/license-${license}-green)`;
  return badgeString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Insert links under Questions section
// TODO: Write ToC
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);
  let licenseLink = renderLicenseLink(data.license);
  
  let markdown = `# ${data.title}
    ## Description
    ${data.description}
    ${licenseBadge}
    ## Table of Contents
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${licenseSection}
    ${licenseLink}
    ## Contributing
    ${data.contribution}
    ## Tests
    ${data.test}
    ## Questions
    ${data.github}
    ${data.email}
  `;

  return markdown;
}

module.exports = generateMarkdown;
