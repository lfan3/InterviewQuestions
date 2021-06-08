let result = []
function cansum(targetSum, numbers){
    if(targetSum === 0)
        return result;
    if(targetSum <0)
        return null;

    for(let i=0; i<numbers.length; i++){
        let newTarget = targetSum - numbers[i];
        result.push(numbers[i]);

        if(cansum(newTarget, numbers))
            return result;
        else
            result.pop();
    }
    return null;
}

function cansumDynamic(targetSum, numbers, memo = {}){
    if(targetSum === 0)
        return result;
    if(targetSum <0)
        return null;
    
  
    for(let i=0; i<numbers.length; i++){
        let newTarget = targetSum - numbers[i];
        result.push(numbers[i]);
        memo[newTarget] = result;
        if(cansum(newTarget, numbers))
            return result;
        else
            result.pop();
    }
    return null;
}

let a = cansum(6, [2,4])
console.log(a);