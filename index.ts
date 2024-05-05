#! /usr/bin/env    node

import inquirer from "inquirer";

 const currency: any = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.80,
    INR: 83.38,
    PKR: 277.42,
};

let user_answer = await inquirer.prompt (
    [
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        },
    {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"],
        },

     {
        name: "amount",
        type: "number",
        message: "Enter your amount",
     },

    ]
);

let fromAmount = currency[user_answer.from]

let toAmount = currency[user_answer.to]

let  amount =  user_answer.amount

let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);