//'2InputCalculator' PROJECT CALCULATES TWO INPUTED VALUES WITH THE DESIRED INPUTED OPERAND
//THIS IS A BEGINNER JAVASCRIPT PROGRAM I AM MAKING TO REINFORCE MY LEARNING
//SO DON'T EXPECT OPTIMIZED CODE
//CREATED BY: CHRISTIAN SEIPLE 


//DECLARATIONS AND PROMPTS

const prompt = require("prompt-sync")();

let input1 = prompt("What is your first input number?");

let operation = prompt("What is your desired operation?");

let input2 = prompt("What is your second input number?");

input1 = parseInt(input1);
input2 = parseInt(input2);


//CALCULATIONS AND RETURNED VALUES

if(operation == '+'){
    console.log(input1 += input2);
}
if(operation == '-'){
    console.log(input1 -= input2);
}
if(operation == '*'){
    console.log(input1 *= input2);
}
if(operation == '/'){
    console.log(input1 /= input2);
}

