let prevInput="0"
let calculationOperator=""
let currentIput="0"
const calculatorsccreen=document.querySelectorAll('.calculator-screen')
const updateScreen = (number) =>{
 calculatorSccreen.value=number
}
const numbers=document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener( "click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentInput)
})
})
const inputNumber = (number) =>{
    if(currentIput===0)
    {
        currentIput=number
    }
    else{
        currentIput+=number
    }
   }
   const operators=document.querySelectorAll(".operator")
   operators.forEach((operator) => {
       operator.addEventListener('click', (event) => {
       inputOperator(event.target.value)
   })
})
const inputOparator =(operator) =>{
    prevInput=currentInput
    calculationOperator=operator
    currentInput="0"
}
const equalSign = document.querySelector(".equal_sign")
  equalSign.addEventListener('click', () => {
    calculate()
    UpdateScreen(currentInput)
})
const calculate =() =>{
let result= 0
switch(calculationOperator){
    case "+":
        result=parseInt(prevInput)+parseInt(currentIput)
        break
    case"-":
    result=parseInt(prevInput)-parseInt(currentIput)
    break
    case"*":
    result=parseInt(prevInput)*parseInt(currentIput)
    break
    case"/":
    result=parseInt(prevInput)/parseInt(currentIput)
    break
    default:
        return
}

currentInput= result.toString()
calculationOperator =""
}