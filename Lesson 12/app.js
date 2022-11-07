class Calculator {
    constructor(previousOpTextElement, currentOpTextElement){
    this.previousOpTextElement = previousOpTextElement
    this.currentOpTextElement = currentOpTextElement
    this.clear()
    }

    clear() {
        this.currentOp = ''
        this.previousOp = ''
        this.operation = undefined
    }

    delete(){
        this.currentOp = this.currentOp.toString().slice(0, -1)

    }

    appendNumber(number){
        if (number === '.' && this.currentOp.includes('.')) return
        this.currentOp = this.currentOp.toString() + number.toString()

    }
    chooseOperation(operation){
        if (this.currentOp === '') return
        if (this.previousOp !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOp = this.currentOp
        this.currentOp = ''

    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOp)
        const current = parseFloat(this.currentOp)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOp = computation
        this.operation = undefined
        this.previousOp = ''
    }

    getDisplayNum(number){
        const stringNum = number.toString()
        const integerDigit = parseFloat(stringNum.split('.')[0])
        const decimalDigit = stringNum.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigit)){
            integerDisplay = ''
         } else {
            integerDisplay = integerDigit.toLocaleString('en', {
            maximumFractionDigits: 0})
         }
        if (decimalDigit != null){
            return `${integerDisplay.$decimalDigit}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay(){
        this.currentOpTextElement.innerText = this.getDisplayNum(this.currentOp)
        if(this.operation !=null){
        this.previousOpTextElement.innerText = `${this.getDisplayNum(this.previousOp)} ${this.operation}`
        }
    }
}
const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equal]');
const previousOpTextElement = document.querySelector('[data-previous-op]');
const currentOpTextElement = document.querySelector('[data-current-op]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');

const calculator = new Calculator(previousOpTextElement, currentOpTextElement);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    } )
})

operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    } )
})

equalBtn.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearBtn.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteBtn.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})