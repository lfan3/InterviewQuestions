
function countPath(x, y, m, n){
    let grid = creatGrid(m, n);
    let path = gridTravelerDfs(x, y, m, n, grid);
    //return path.length;
    return path[0]
}
/**
 * first dfs method *
 */

function gridTravelerDfs(x, y, m, n, grid, count = [0]){
    if(x+1 === m && y+1 === n){
        count[0]++
        return count;
    }
    if(!(x < m && y < n && x >=0 && y >=0))
        return count;
    gridTravelerDfs(x+1, y, m, n, grid, count);
    gridTravelerDfs(x, y+1, m, n, grid, count);
    return count;
}

/**
 * recursive method *
 * reduce the grid dimension
 */

function gridTravelerRecursiveDynamic(m, n, memo = {}){
    let key = m + ',' + n;
    let key2 = n + ',' + m;

    if(m<=0 || n <=0)
        return 0;
    if(m===1 && n ===1){
        return 1;
    }
    if(key in memo){
        return memo[key];
    }
    if(key2 in memo){
        return memo[key2];
    }
    memo[key] = gridTravelerRecursive(m-1, n, memo) + gridTravelerRecursive(m, n-1, memo);
    return memo[key];
}

function gridTravelerRecursive(m, n){

    if(m<=0 || n <=0)
        return 0;
    if(m===1 && n ===1){
        return 1;
    }

    return gridTravelerRecursive(m-1, n) + gridTravelerRecursive(m, n-1);
}

//??? flavien
function gridTravelerDfsNOtwork(x, y, m, n, grid, count){
    if(x+1 === m && y+1 === n){
        count++
        return count;
    }
    if(!(x < m && y < n && x >=0 && y >=0))
        return count;
    gridTravelerDfs(x+1, y, m, n, grid, count);
    gridTravelerDfs(x, y+1, m, n, grid, count);
    return count;
}

function creatGrid(m, n){
    //m max height
    //n max widht
    let grid = [];
    for(let i=0; i< m; i++){
        grid.push(new Array(n).fill(0))
    }
    return grid;
}

// let grid = creatGrid(3,4);
// let p = gridTravelerDfs(0,0,3,4, grid);

let t0 = Date.now();
let n = countPath(0,0,18,18)
let t1 = Date.now();
console.log('countPathdfs', n, ' time ', t1 - t0)

t0 = Date.now();
n = gridTravelerRecursive(18,18);
t1 = Date.now();
console.log('gridTravelerRecursive', n,' time ', t1 - t0)

t0 = Date.now();
n = gridTravelerRecursiveDynamic(18,18);
t1 = Date.now();
console.log('gridTravelerRecursiveDynamic', n,' time ', t1 - t0)
