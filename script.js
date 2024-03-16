const { createApp } = Vue;

createApp({
    data() {
        return {
            // Estado inicial do display da calculadora
            display: '0',
            // Número atualmente sendo digitado pelo usuário
            currentNumber: null,
            // Número anteriormente digitado pelo usuário
            previousNumber: null,
            // Operador selecionado (+, -, *, /)
            operator: null,
        }
    },
    methods: {
        // Função para lidar com cliques nos botões da calculadora
        handleButton(button) {
            switch (button) {
                // Verifica se o botão é um operador
                case '*':
                case '-':
                case '+':
                case '/':
                    this.handleOperator(button);
                    break;
                // Caso seja um ponto decimal
                case '.':
                    this.handleDecimal();
                    break;
                // Caso seja o botão de igual
                case '=':
                    this.handleEquals();
                    break;
                // Caso seja o botão de limpar (AC)
                case 'AC':
                    this.handleClear();
                    break;
                // Caso seja um número
                default:
                    this.handleNumber(button);
            }
        },
        // Função para calcular o resultado da expressão
        calculate() {
            // Converte os números de string para ponto flutuante
            const numberOne = parseFloat(this.previousNumber);
            const numberTwo = parseFloat(this.currentNumber);
            let result;
            // Realiza a operação com base no operador selecionado
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
            // Atualiza o display com o resultado da operação
            this.display = result.toString();
        },
        // Função para lidar com a seleção de operadores
        handleOperator(op) {
            // Verifica se já há números e operador para calcular
            if (this.currentNumber !== null && this.previousNumber !== null && this.operator !== null) {
                this.calculate();
            }
            // Atualiza o operador selecionado e os números anteriores
            this.operator = op;
            this.previousNumber = this.currentNumber;
            this.currentNumber = null;
        },
        // Função para adicionar um ponto decimal ao número atual
        handleDecimal() {
            // Verifica se o número já possui um ponto decimal
            if (!this.display.includes('.')) {
                this.display += '.';
            }
        },
        // Função para calcular o resultado final quando pressionado o botão de igual
        handleEquals() {
            // Verifica se há números e operador para calcular
            if (this.currentNumber !== null && this.previousNumber !== null && this.operator !== null) {
                this.calculate();
                // Reseta o operador e os números anteriores
                this.operator = null;
                this.previousNumber = null;
                this.currentNumber = parseFloat(this.display);
            }
        },
        // Função para limpar o display e os dados da calculadora
        handleClear() {
            this.display = '0';
            this.currentNumber = null;
            this.previousNumber = null;
            this.operator = null;
        },
        // Função para lidar com a entrada de números
        handleNumber(num) {
            // Verifica se o display está vazio ou se o número atual é nulo
            if (this.display === '0' || this.currentNumber === null) {
                this.display = num;
            } else {
                this.display += num;
            }
            // Converte o valor do display para um número
            this.currentNumber = parseFloat(this.display);
        },
    }
}).mount("#app");
