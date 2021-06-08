function canSumDynamic(targetSum, array, memo={}){
    if(targetSum == 0) return true;
    if(targetSum < 0) return false;
    if(targetSum in memo)
        return false;
    for(let a of array){
        const ts = targetSum-a;
        //not forget the memo!!!
        if(canSum(ts, array, memo)){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

function canSum(targetSum, array){
    if(targetSum == 0) return true;
    if(targetSum < 0) return false;
  
    for(let a of array){
        const ts = targetSum-a;
    
        if(canSum(ts, array)) 
            return true;
    }
    return false;
}



let t0 = Date.now();
let a = canSumDynamic(300, [14,7]);
let t1 = Date.now();
console.log('canSumDynamic', a, ' time ', t1 - t0)

t0 = Date.now();
a = canSum(300, [14,7]);
t1 = Date.now();
console.log('canSum', a,' time ', t1 - t0)
/**
 * redo this *
 */
