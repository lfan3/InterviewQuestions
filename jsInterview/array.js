const arrayFirst = [1,2,3,4,5];
const arraySecond = [1,2,3,4,5];

function compare(a1, a2){
    return(a1.length === a2.length && a1.every((val,i)=>a2[i] === val))
}

console.log(compare(arrayFirst, arraySecond))
//? sort change l'array originaire