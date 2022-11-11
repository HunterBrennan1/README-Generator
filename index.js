const inquirer = require("inquirer");
const fs = require("fs");
const components = require("components");

// QUESTIONS ARRAY
inquirer.prompt(
  [
    {
      type: "input",
      message: "what is the project title?",
      name: "Title"
    },
    {
      type: "input",
      message: "What is the description of the project?",
      name: "Description"
    },
    {
      type: "input",
      message: "Table of Contents",
      name: "Table of Contents"
    },
    {
      type: "input",
      message: "What does the user need to install to run this app?",
      name: "Installation"
    },
    {
      type: "input",
      message: "How is the app used? give instructions",
      name: "Usage"
    },
    {
      type: "input",
      message: "What liscence is used?",
      name: "License"
    },
    {
      type: "input",
      message: "Who contributed to the project?",
      name: "Contributing"
    },
    {
      type: "input",
      message: "what commands are needed to run this app?",
      name: "Tests"
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "Github"
    },
    {
      type: "input",
      message: "What is your Email?",
      name: "Email"
    },
  ]
).then(
  ({
    title,
    installation,
    Usage,
    license,
    Contributing,
    Tests,
    Github,
    Email,
  }) => {
    // TEMPLATE
    const template = `# ${title}
  
  * [Installation](#installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  # Installation
  ${installation}
  ## Usage
  ${Usage}
  ## Contributing
  ${Contributing}
  ### License
  ${license}
  
  #Contact
  * Github :${Github}
  * Email :${Email}`;
    createNewFile(title, template);
  }
);

// README FUNCTION
function createNewFile(fileName, data) {

  fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
    if (err) {
      console.log(err)
    }
    console.log('Your README has been generated!');
  })
}


