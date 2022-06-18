const fs = require('fs');
let README;
const generateTemplate = (answers) => {
   console.log(answers)
   README = `# ${answers.Project}
   ![Github: license](https://img.shields.io/badge/License-MIT-yellow.svg)
# Description

${answers.description}

## Table of Contents 

* [Questions](##Questions)
* [Description](##Description)
* [Installations](##Installations)
* [Usage](##Usage)
* [License](##License)
* [Test](##Test)
* [Contributing](##Contributing)

## Installations

${answers.Installation}

## Usage 

${answers.Usage}

## License 

The project is licensed under the ${answers.license} license

## Test
To run tests, run the following command: 

${answers.tests}

## Contributing

${answers.Contributing}

## Questions 

If you have any questions about the repo you can directly contact me at ${answers.email} or visit ${answers.name}
   `
   createFile(README)
  
}

const createFile = (content) => {
  fs.writeFile('./READMETemplate.md', content, err => {
  if (err) throw err;

  console.log('Done! Check out README.md to see the output!');
});
}






module.exports = generateTemplate;