var inquirer = require('inquirer');
// const fs = require('fs');

inquirer
  .prompt([
    {
      name: "user_name",
      type: "input",
      message: "What is your name?",
    },
    
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
