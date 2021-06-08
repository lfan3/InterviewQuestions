
function fibo(n, memo = {}){
    if(n==1 || n == 2)
        return 1;
    //instead of writing memo[n]
    if(n in memo)
        return memo[n];
    memo[n] = fibo(n-1, memo) + fibo(n-2, memo)
    return memo[n]
}

let begin = Date.now();
let r = fibo(60);
let end = Date.now();

console.log(r)

console.log(`Call to doSomething took ${end -begin} milliseconds.`);


// function stupidFibo(n){
//     if(n<2)
//         return 1
//     return stupidFibo(n-1) + stupidFibo(n-2)
// }

// let c = stupidFibo(200);

// console.log(c)
