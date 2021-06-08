//from start point
//  2)move 4 direction on each point
//  if the current point is feasible continue step 2)
//? how many ways, and the concrete chemin
'use strict'
const { parentPort } = require('worker_threads')
const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

const pathStack = [];
const allpaths = [];

function findPath(current, maze){
    const x = current[1];
    const y = current[0];
    if(maze[y][x] == 1)
        return
    if(maze[y][x] == 2){
        //at last, pathStack will be empty
        allpaths.push(pathStack.slice(0));
        return true;
    }
    pathStack.push(current);

    maze[y][x] = 1;
    direction.forEach(d=>{
        if(isfeasible(x+d[0], y+d[1], 5, 5)){
            findPath([y+d[1], x+d[0]], maze)
        }
    })
    // if(y+1 < 5)
    //     findPath([y+1, x], maze);
    // if(y-1>=0)
    //     findPath([y-1, x], maze);
    // if(x+1 < 5)
    //     findPath([y, x+1], maze);
    // if(x-1 >=0)
    //     findPath([y, x-1], maze);

    maze[y][x] = 0;
    pathStack.pop();
    return false;
}

function isfeasible(x, y, x_limit, y_limit){
    return x>=0 && y>=0 && x < x_limit && y < y_limit
}



function isEgale(array1, array2){
    return array1.length === array2.length && array1.every((a, i)=> a === array2[i])
}

var maze = [[0,0,1,0,0],[0,0,1,0,0], [1,0,2,0,0], [0,1,0,1,0], [0,0,1,0,0]]
findPath([0,4], maze);
console.log(allpaths)

/**
 * summery backtrack *
 * base_case
 * recursive + constrain
 * backtrack behavior
 */
