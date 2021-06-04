const inquirer = require("inquirer")


const addManager = async () => {

    const managerQuestion = [
      {
        type: "input",
        message: "What is the name of your manager?",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber",
      },
    ];

    const answers = await inquirer.prompt(managerQuestion)
  
    console.log(answers)
    
};

const addEmployees = () => {

}

const generateHtml = () => {

}

const writeToFile = () => {

}

const init = async() => {
    await addManager()
}
init ()