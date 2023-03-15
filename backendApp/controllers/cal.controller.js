
const Calculator =
require('../libraries/Calculator');

const myCalc= new Calculator()

//------------------Ex5----------------------------//

const addNumbers = (req, res) => {

    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let sum = myCalc.add(number1,number2)
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}

const subtractNumbers = (req, res) => {

    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let sum = myCalc.subtract(number1,number2)
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}

const multiplyNumbers = (req, res) => {

    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let sum = myCalc.multiply(number1,number2)
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}

const divideNumbers = (req, res) => {

    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    
    let sum = myCalc.divide(number1,number2)
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}



module.exports = {
    addNumbers, subtractNumbers, multiplyNumbers, divideNumbers
}
//------------------Ex5----------------------------//
// const addNumbers = (req, res) => {

//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
    
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({ result: sum })
// }

// const subtractNumber = (req, res) => {

//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
    
//     let sum = number1 - number2
//     console.log(sum)
//     res.status(200)
//     res.json({ result: sum })
// }

// const multiplyNumber = (req, res) => {

//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
    
//     let sum = number1 * number2
//     console.log(sum)
//     res.status(200)
//     res.json({ result: sum })
// }

// const divideNumber = (req, res) => {

//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
    
//     let sum = number1 / number2
//     console.log(sum)
//     res.status(200)
//     res.json({ result: sum })
// }



// module.exports = {
//     addNumbers, subtractNumber, multiplyNumber, divideNumber
// }