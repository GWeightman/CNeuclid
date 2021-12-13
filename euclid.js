import inquirer from "inquirer"

let nums = [
    {
        type: "number",
        name: "first",
        message: "Enter the first number"
    },
    {
        type: "number",
        name: "second",
        message: "Enter the second number"
    }
]

const euclid = async() => {
    let response = await inquirer.prompt(nums)
    step1(response.first, response.second)
}

const step1 = (a, b) => {
    if(b == 0){
        console.log(a)
    }
    else{
        step2(a, b)
    }
}

const step2 = (a, b) => {
    if(a > b){
        a = a - b
        step1(a, b)
    }
    else{
        b = b - a
        step1(a, b)
    }
}

euclid()