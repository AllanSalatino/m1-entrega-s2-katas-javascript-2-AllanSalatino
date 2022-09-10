function add(a, b){
    return a + b 
}

function multiply(a, b){
    let result = 0
    for(let i=0; i<b; i++){
        result = add(a, result) 
    }
    return result
}

function power(x, n){
    result = 1
    resultMult = 0
    for(let i=0; i<n; i++){
        resultMult = multiply(result, x)
        result = add(resultMult, 0)
    }
    return result
}

function factorial(x){
    let mult = x
    let resultMult = 0
    result = 0
    for(let i=x-1; i>0; i--){
        resultMult = multiply(mult, i)
        mult = resultMult   
    }
    return mult
}

function fibonacci(n){
    let numeroSomado = 0
    const arrFibonacci = [0, 1]
    let j = 0
    for(let i = 0; i<n; i++){
        j = add(j, 1)
        numeroSomado = add((arrFibonacci[i]),(arrFibonacci[j]))
        arrFibonacci.push(numeroSomado)
    }
    return arrFibonacci[n]
}