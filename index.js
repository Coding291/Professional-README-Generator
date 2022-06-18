//created a constant inquirer to obtain inquirer
const inquirer = require('inquirer');
// created a constant for generate template and set it to the relative path of that page
const generateTemplate = require('./README-template.js');
console.log(generateTemplate)
// created a function here 
const userInput = () => {
    //return inquirer prompt and made an array of objects
    return inquirer.prompt([
        //created user prompt using type name message and it validity
        {
         type: 'link', 
         name: 'name',
         message: 'What is your Github username? (Required)',
         validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your Github username!');
            return false;
          }
        }
        },
   
        {
        // Same process for this and for the rest of them
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
       
        },
        {
        type: 'input',
        name: 'Project',
        message: 'What is your project name?',
         
        },
        {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project: ',
         
        },
        {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
        type: 'input',
        name: 'Installation',
        message: 'What command should be run to install dependecies? (npm i) ',
         
        },
        {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests? (npm test) ',
         
        },
        {
        type: 'input',
        name: 'Usage',
        message: 'What does the user need to know about using the repo?' ,
         
        },
        {
        type: 'input',
        name: 'Contributing',
        message: 'What does the user need to know about contributing to the repo?',
         
        },
        
  ])
    
    }
    // we called the function here
    userInput()
       //and using .then method we retrieve the answers to generate template
      .then(answers => {
          generateTemplate(answers)
      })