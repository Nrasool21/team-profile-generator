const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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

const addEngineer = async () => {
  const engineerQuestions = [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your github user name?",
      name: "userName",
    },
  ];

  const answers = await inquirer.prompt(engineerQuestions);

  const engineer = new Engineer(
    answers.id,
    answers.name,
    answers.email,
    answers.userName
  );

  employees.push(engineer);
};

const addIntern = async () => {
  const internQuestions = [
    {
      type: "input",
      message: "What is the Intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter Intern's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is Intern's employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is Intern's school name?",
      name: "schoolName",
    },
  ];

  const answers = await inquirer.prompt(internQuestions);

  const intern = new Intern(
    answers.id,
    answers.name,
    answers.email,
    answers.schoolName
  );

  employees.push(intern);
};

const addEmployees = async () => {
  let inProgress = true;

  while (inProgress) {
    const employeeQuestion = {
      type: "list",
      message: "please select the employee you would like to add",
      name: "employee",
      choices: ["Engineer", "Intern", "Exit"],
    };

    const answers = await inquirer.prompt(employeeQuestion);
    if (answers.employee === "Engineer") {
      await addEngineer();
    }
    if (answers.employee === "Intern") {
      await addIntern();
    }

    if (answers.employee === "Exit") {
      inProgress = false;
    }
  }
};

const generateHtml = () => {};

const writeToFile = () => {};

const init = async () => {
  await addManager();

  await addEmployees();
  console.log(employees);
};
init();
