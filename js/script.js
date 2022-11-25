const firstvalor = document.querySelector('#first-valor');
const resultvalor = document.querySelector('#result-valor');
const buttons = document.querySelectorAll('#buttons-container button');


class calculator {
    constructor(firstvalor, resultvalor){
    this.firstvalor = firstvalor;
    this.resultvalor = resultvalor;
    this.valor = "";

    }
    addDigit(Digit){
        if( Digit === "."&& this.resultvalor.innerText.includes(".")){
            return;
        
        }
        this.valor= Digit
        this.upDateScreen()

    }
 processOperations(operations){

    if(this.resultvalor.innerText == ""){

       if(this.firstvalor.innerText !== ""){

        this.changeOperation(operations);
       }
       return
    }


    let operationValue; 
    const previus = +this.firstvalor.innerText.split(" ")[0];
    const current = +this.resultvalor.innerText;

    switch (operations) {
        case "+":
            operationValue = previus + current
            this.upDateScreen(operationValue, operations, previus, current)
        break;
        case "-":
            operationValue = previus - current
            this.upDateScreen(operationValue, operations, previus, current)
         break;
         case "x":
            operationValue = previus * current
            this.upDateScreen(operationValue, operations, previus, current)
         break;
        case "÷":
            operationValue = previus / current
            this.upDateScreen(operationValue, operations, previus, current)
          break;
          case "DEL":
            
            this.Deletelast()
          break;
          case "C":
            
            this.DeleteAll()
          break;
          case "CE":
            
            this.DeleteAllOperations()
          break;
          case "=":
          this.equalOperation()
          break;
        default:
            break;
            
    }
   

    console.log(operationValue, operations, previus, current)
 }

 
 upDateScreen(operationValue = null, operations = null, previus = null, current = null  ){

    if (operationValue === null) {

        this.resultvalor.innerText += this.valor;
    }else{
        if(previus === 0){
    operationValue = current
        }
        this.firstvalor.innerText =`${operationValue} ${operations}`;
        this.resultvalor.innerText= ""
    }

        
    }
 changeOperation(operations){
    
const math = ["x","+","÷","-"]

if (!math.includes(operations)) {
    return
}
this.firstvalor.innerText = this.firstvalor.innerText.slice(0 , -1) + operations;
 }
   
//Deletar o ultimo numero
 Deletelast(){
    this.resultvalor.innerText = this.resultvalor.innerText.slice(0, -1)
 }

 //Delete todos os numeros digitado
 DeleteAll(){
    this.resultvalor.innerText = ""
    this.firstvalor.innerText = ""
 }
//Deelete todas as operações
 DeleteOperations(){
    this.resultvalor.innerText = ""
    
 }

 equalOperation(){
const operationON = this.firstvalor.innerText.split(" ")[1]


 this.processOperations(operationON)
 }

};
 const calc = new calculator(firstvalor, resultvalor)


buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;


        if(+value >= 0 || value === "."){
            console.log(value)
            calc.addDigit(value);
        } else {
            calc.processOperations(value)
        }
    });
});