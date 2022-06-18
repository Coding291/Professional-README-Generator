// we created a file here
const fs = require('fs');
// we used let instead of var 
let README;
//created a function and gave it a parameter
const generateTemplate = (answers) => {
   console.log(answers)
   //Here we insert data by the assigning README to the following
   README = `# ${answers.Project}
   ![Github: license](https://img.shields.io/badge/License-MIT-yellow.svg)
# Description

${answers.description}

## Table of Contents 

* [Questions](#Questions)
* [Description](##Description)
* [Installations](##Installations)
* [Usage](#Usage)
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

If you have any questions about the repo you can directly contact me at ${answers.email} or visit my github [${answers.name}] at https://github.com/Coding291
   `
   //here we create file that pass README that we created above
   createFile(README)
  
}
//We created another function and pass the parameter
const createFile = (content) => {
  // we pass three arguments one is the where is this sent to, second is what and the third if we catch an error
  fs.writeFile('./READMETemplate.md', content, err => {
  if (err) throw err;
   //here is the message when everything is done and the template is created
  console.log('Done! Check out README.md to see the output!');
});
}





//here we export the template
module.exports = generateTemplate;