const inquirer = require("inquirer");

const Manager = require("./lib/manager");

const employees = [];

const addManager = async () => {
  const managerQuestions = [
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

  const answers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    answers.id,
    answers.name,
    answers.email,
    answers.officeNumber
  );

  employees.push(manager);
};

const addEmployees = () => {};

const generateHtml = () => {};

const writeToFile = () => {};

const init = async () => {
  
  await addManager();
  
};
init();
