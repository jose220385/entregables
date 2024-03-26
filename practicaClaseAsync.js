const suma = (a,b) => {
    return new Promise((resolve,reject) =>{
        if(a==0 || b==0){
            reject('Operacion Innecesaria')
        } else if (a+b < 0){
            reject('La calculadora solo debe devolver valores positivos')
        } else {
            resolve(a+b)
            
        }
    })
}

const resta = (a,b) => {
    return new Promise((resolve,reject) =>{
        if(a==0 || b==0){
            reject('Operacion Invalida')
        } else if (a-b < 0){
            reject('La calculadora solo debe devolver valores positivos')
        } else {
            resolve(a-b)
            
        }
    })
}

const multiplicacion = (a,b) => {
    return new Promise((resolve,reject) =>{
        if(a<0 || b<0){
            reject('Operacion Invalida')
        } else {
            resolve(a*b)
            
        }
    })
}

const dividir = (dividendo,divisor) => {
    return new Promise((resolve,reject) =>{
        if(divisor===0){
            reject('No se puede dividir por 0')
        } else {
            resolve(dividendo/divisor)
            
        }
    })
}

const calculos = async(valor1,valor2)=>{
    try{
        let resultadoResta = await resta(valor1,valor2)
        let resultadoSuma= await suma(valor1,valor2)
        console.log(resultadoResta)
        console.log(resultadoSuma)
    }
    catch(error){
        console.log(error)
    }
}

calculos(9,3)
calculos(0,4)
calculos(-1,-4)