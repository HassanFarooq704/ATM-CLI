import inquirer from "inquirer";

interface ansType {
    userId:string,
    userPin:number,
    accountType:string,
    transactionType:string,
    amount:number
}
const answers : ansType = await inquirer.prompt([
    {
        type:"input",
        name:"userId",
        message:"Kindly Enter your Id: "
    },
    {
        type:"number",
        name:"userPin",
        message:"Kindly Enter your PIN: "
    },
    {
        type:"list",
        name:"accountType",
        choices:["current","saving"],
        message:"Select your account type"
    },
    {
        type:"list",
        name:"transactionType",
        choices:["Fast cash","withdraw"],
        message:"Select your transaction type",
        when(answers) {
            return answers.accountType
        },   
    },
    {
        type:"list",
        name:"amount",
        choices:[1000,2000,5000,10000,20000],
        message:"Select your amount",
        when(answers) {
            return answers.transactionType == "Fast cash"
        },   
    },
    {
        type:"number",
        name:"amount",
        message:"Select your amount",
        when(answers) {
            return answers.transactionType == "withdraw"
        },   
    },
])

if(answers.userId && answers.userPin){
    const balance =Math.floor(Math.random()*1000000);
    console.log(balance);
    const enteredAmount = answers.amount
    if(balance >= enteredAmount){
        const remaining =balance - enteredAmount;
        console.log("Your remainig balance is :", remaining);
    }else{
        console.log("Insufficient Balance");
        
    }
}