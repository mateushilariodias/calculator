const { createApp } = Vue;

createApp({
    data(){
        return{
            display:'0',
            currentNumber:null,
            previousNumber:null,
            operator:null,
        }
    },
    methods:{
        handleButton(button){
            switch(button){
                case "*":
                case "-":
                case "+":
                case '/':
                    this.handleOperator(button)
                    break
                case ".":
                    this.handleDecimal()
                    break
                case "=":
                    this.handleEqual()
                    break
                case "AC":
                    this.handleClear()
                    break
                default:
                    this.handleNumber(button)
            }
        },
        handleOperator(){

        },
        handleDecimal(){

        },
        handleEqual(){

        },
        handleClear(){

        },
        handleNumber(){

        }
    }
}).mount("#app")
