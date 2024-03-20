#! /usr/bin/env node

import inquirer from "inquirer";

const result = await inquirer.prompt([
    {message: "Enter your first number", type:"number", name: "val1"},
    {message: "Enter your second number", type:"number", name:"val2"},
    {message: "Choose your opreator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"]
},
]);

if (result.operator === "Addition") {
    console.log(result.val1 + result.val2)
} else if (result.operator === "Substraction") {
    console.log(result.val1 - result.val2);    
} else if (result.operator === "Multiplication") {
    console.log(result.val1 * result.val2);   
}else if (result.operator === "Division") {
    console.log(result.val1 / result.val2);   
} else {
    console.log("Please enter a valid number!")
}