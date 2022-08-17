// code your solution here
function saturdayFun(arg){
    switch(arg){
        case "bathe my dog":
            return `This Saturday, I want to ${arg}!`
        default:
            return "This Saturday, I want to roller-skate!"
    }
}

const mondayWork = function(arg){
    switch (arg){
        case "work from home":
            return `This Monday, I will ${arg}.`
        default:
            return "This Monday, I will go to the office."
    }
}

function wrapAdjective(result = ""){
    const innerFunction = function(emphatic = "a hard worker"){
        return `You are ${result}${emphatic}${result}!`
    }
    return innerFunction;
}
wrapAdjective();