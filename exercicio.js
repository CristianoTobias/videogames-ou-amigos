//Voce Gosta de Videogames?
const resposta1 = true

//Voce tem amigos?
const resposta2 = true

//Amigos Reais ou Virtuais

const resposta3 = "reais"

if(resposta1){
    if(resposta2){
        if(resposta3 === "reais"){
            console.log("Compre um Wii!")
        }else if(resposta3 === "virtuais"){
            console.log("Compre um Xbox!")
        }else {
            console.log("Resposta precisa ser virtuais ou reais!")
        }

    }else {
        console.log("Compre um PS3!")
    }

}else{
    console.log("Compre um Pc!")
}


// let numero = prompt("Digite um numero: ")
// let arr = []
// for (let index = 0; index < 5; index++) {
//     arr.push(numero)
    
// }
// console.log(arr)

// for (let index = 0; index < 3; index++) {
//     console.log(arr[0])
    
// }

// let arrayProdutos = ["Iphone 12", 15000, 80, 1200000]

// arrayProdutos.pop()