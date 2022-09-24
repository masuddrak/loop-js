function reversFactorial(number){
    factorial=1;
    for(let i=1; i<=number;i++){
        factorial=factorial*i
    }
    return factorial
}
console.log(reversFactorial(7))