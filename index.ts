import inquirer from "inquirer";

type anstype = {
    userGuess: number
}

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write Your Guess B/w 1 to 100: "
    }
])

const {userGuess} = answer;

if(userGuess ==systemGeneratedNo){
    console.log(userGuess, "userGuess", systemGeneratedNo, "SYs")
    console.log("yaaaaaa! Your answer is correct \n you Win!")
} else{
    console.log("Please try again Better luck next time ")
}