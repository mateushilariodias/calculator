const { createApp } = Vue;

createApp({
    data() {
        return {
            display: '0',
            currentNumber: null,
            previousNumber: null,
            operator: null,
        }
    },
    methods: {
        handleButton(button) {
            switch (button) {
                case '*':
                case '-':
                case '+':
                case '/':
                    this.handleOperator(button);
                    break;
                case '.':
                    this.handleDecimal();
                    break;
                case '=':
                    this.handleEquals();
                    break;
                case 'AC':
                    this.handleClear();
                    break;
                default:
                    this.handleNumber(button);
            }
        },
        calculate() {
            const numberOne = parseFloat(this.previousNumber);
            const numberTwo = parseFloat(this.currentNumber);
            let result;
            switch (this.operator) {
                case '+':
                    result = numberOne + numberTwo;
                    break;
                case '-':
                    result = numberOne - numberTwo;
                    break;
                case '*':
                    result = numberOne * numberTwo;
                    break;
                case '/':
                    result = numberOne / numberTwo;
                    break;
            }
            this.display = result.toString();
        },
        handleOperator(op) {
            if (this.currentNumber !== null && this.previousNumber !== null && this.operator !== null) {
                this.calculate();
            }
            this.operator = op;
            this.previousNumber = this.currentNumber;
            this.currentNumber = null;
        },
        handleDecimal() {
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },
        handleEquals() {
            if (this.currentNumber !== null && this.previousNumber !== null && this.operator !== null) {
                this.calculate();
                this.operator = null;
                this.previousNumber = null;
                this.currentNumber = parseFloat(this.display);
            }
        },
        handleClear() {
            this.display = '0';
            this.currentNumber = null;
            this.previousNumber = null;
            this.operator = null;
        },
        handleNumber(num) {
            if (this.display === '0' || this.currentNumber === null) {
                this.display = num;
            } else {
                this.display += num;
            }
            this.currentNumber = parseFloat(this.display);
        },
    }
}).mount("#app");