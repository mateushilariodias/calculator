const { createApp } = Vue;

createApp({
    data(){
        return{
            display:'0',
            numeroAtual:null,
            numeroAnterior:null,
            operador:null,
        }
    },
    methods:{
        lidarBotao(botao){
            switch(botao){
                case "*":
                case "-":
                case "+":
                case '/':
                    this.lidarOperador(botao)
                    break
                case ".":
                    this.lidarDecimal()
                    break
                case "=":
                    this.lidarIgual()
                    break
                case "AC":
                    this.lidarClear()
                    break
                default:
                    this.lidarNumero()
            }
        }
    }
}).mount("#app")