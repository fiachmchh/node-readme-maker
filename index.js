var inquirer = require('inquirer');
const fs = require('fs');

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


    var newReadMe = `
    
    User name ${answers.user_name}

`

fs.writeFile('newReadMe.md', newReadMe, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
console.log('New Readme!!', newReadMe)




  })


