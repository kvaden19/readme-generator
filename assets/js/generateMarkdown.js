// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeString = ``;
  let shortName = '';
  if (!license) {
    return badgeString
  }

  // Switch statement to pick a badge-friendly shortname based on the license
  switch(license) {
    case 'Apache 2.0':
      shortName = 'Apache';
      break;
    case 'Boost Software 1.0':
      shortName = 'Boost';
      break;
    case 'GNU AGPLv3':
      shortName = 'AGPL';
      break;
    case 'GNU GPLv3':
      shortName = 'GPL';
      break;
    case 'GNU LGPLv3':
      shortName = 'LGPL';
      break;
    case 'MIT':
    case 'Unilicense':
      shortName = license;
      break;
    case 'Mozilla Public 2.0':
      shortName = 'Mozilla';
      break;
  }
  badgeString = `![license](https://img.shields.io/badge/license-${shortName}-green)`;
  return badgeString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badgeString = ``;
  let shortName = '';
  if (!license) {
    return badgeString
  }

  // Switch statement to pick a badge-friendly shortname based on the license
  switch(license) {
    case 'Apache 2.0':
      shortName = 'Apache';
      break;
    case 'Boost Software 1.0':
      shortName = 'Boost';
      break;
    case 'GNU AGPLv3':
      shortName = 'AGPL';
      break;
    case 'GNU GPLv3':
      shortName = 'GPL';
      break;
    case 'GNU LGPLv3':
      shortName = 'LGPL';
      break;
    case 'MIT':
    case 'Unilicense':
      shortName = license;
      break;
    case 'Mozilla Public 2.0':
      shortName = 'Mozilla';
      break;
  }
  badgeString = `![license](https://img.shields.io/badge/license-${shortName}-green)`;
  return badgeString;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badgeString = ``;
  let shortName = '';
  if (!license) {
    return badgeString
  }

  // Switch statement to pick a badge-friendly shortname based on the license
  switch(license) {
    case 'Apache 2.0':
      shortName = 'Apache';
      break;
    case 'Boost Software 1.0':
      shortName = 'Boost';
      break;
    case 'GNU AGPLv3':
      shortName = 'AGPL';
      break;
    case 'GNU GPLv3':
      shortName = 'GPL';
      break;
    case 'GNU LGPLv3':
      shortName = 'LGPL';
      break;
    case 'MIT':
    case 'Unilicense':
      shortName = license;
      break;
    case 'Mozilla Public 2.0':
      shortName = 'Mozilla';
      break;
  }
  badgeString = `![license](https://img.shields.io/badge/license-${shortName}-green)`;
  return badgeString;
}


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
