var inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        name: "title",
        type: "input",
        message: "What is the project title?",
    },
    {
      name: "user_name",
      type: "input",
      message: "What is your name?",
    },
    {
        name: "description1",
        type: "input",
        message: "What were your motivations and what problems did you solve by building this project?",
    },
    {
        name: "description2",
        type: "input",
        message: "What did you learn by building this project?",
    },
    {
        name: "description3",
        type: "input",
        message: "What makes this project stand out from others like it?",
    },
    {
        name: "deployed",
        type: "input",
        message: "Please provide a link to your deployed application.",
    },
    {
        name: "installation",
        type: "input",
        message: "Please provide a step by step description of how to install the project.",
    },
    {
        name: "usage",
        type: "input",
        message: "Please provide instructions on how to use the app.",
    },
    {
        name: "credits",
        type: "input",
        message: "Please list any collaborators on this project",
    },
    {
        name: "license",
        type: "input",
        message: "You can choose the appropriate license by following the link on the generated ReadMe. Press return to continue.",
    },
    {
        name: "badges",
        type: "input",
        message: "Include any links to badges for your ReadMe here.",
    },
    {
        name: "features",
        type: "input",
        message: "If your project has many features please list those here.",
    },
    {
        name: "contributing",
        type: "input",
        message: "You can follow the link for instructions on contributions through the readme. Press return to continue",
    },
    {
        name: "tests",
        type: "input",
        message: "Insert any tests for your application here and provide examples on how to run them.",
    },
    
  ])

  .then(answers => {
    
    var newReadMe = `

    # Title : ${answers.title}
    # Author : ${answers.user_name}

    ## Description :
    ${answers.description1}

    ${answers.description2}

    ${answers.description3}

    ${answers.deployed}

    ## Table of Contents :
    
    - Installation 
    - Usage
    - Credits
    - License

    - Badges
    - Features
    - Contributing
    - Tests

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Credits
    ${answers.credits}

    ## License
    You can choose the appropriate license by following the link below:
    (https://choosealicense.com/)

    ## Badges
    ${answers.badges}

    ## Features
    ${answers.features}

    ## Contributing
    You can follow the link below for instructions on contributing:
    (https://www.contributor-covenant.org/)

    ## Tests
    ${answers.tests}

`

fs.writeFile('newReadMe.md', newReadMe, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

})






