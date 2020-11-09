// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

[![GitHub](https://img.shields.io/github/license/bettycode/README-Generator?logo=MIT&style=plastic)](https://github.com/${data.UserName}/${data.title})

# Description

${data.Description}

# Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

# Installation

Dependencies must be installed to run the application properly: ${data.Installation}

# Usage

​This application is used for ${data.Usage}

# License

This project is license under the ${data.License} license.

# Contributing

​Contributors: ${data.Contribution}

# Tests

To run tests, you need to run the following command: ${data.Test}

# Questions

If you have any questions about the repo, pleas open an issue.

Or contact ${data.UserName} using this Email: ${data.Email}.
`;
}

module.exports = generateMarkdown;
