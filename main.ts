#! /usr/bin/env node
import inquirer from "inquirer";


const answer =await inquirer.prompt([
    {message:"enter first number",type:"number",name:"firstNumber"},
    {message:"enter second number",type:"number",name:"secondNumber"},
    {message:"select one of the operators of perform operation",
        type:"list",
        name:"operators",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },]);
        
        
        console.log(answer);

        // Conditional Statement:


        if(answer.operators === "Addition"){
            console.log(answer.firstNumber + answer.secondNumber);}
            else if(answer.operators === "Subtraction"){
                console.log(answer.firstNumber - answer.secondNumber);}
                else if(answer.operators === "Multiplication"){
                    console.log(answer.firstNumber * answer.secondNumber);}
                    else if (answer.operators === "Division"){
                        console.log(answer.firstNumber / answer.secondNumber)}

                        else{console.log("please select valid operators")}