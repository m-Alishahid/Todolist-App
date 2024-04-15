#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let conditions = true;
while (conditions) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your Todo list?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false"
        }
    ]);
    todos.push(addtask.todo);
    console.log("Your Todolist is:");
    conditions = addtask.addmore;
    console.log(todos);
}
