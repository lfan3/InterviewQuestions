const _size = 4;


function fill(graphe){
    //make a copie of graphe but filled with false
    let grapheCopie = new Array(_size);
    for(let i=0; i< _size; i++){
        grapheCopie[i] = new Array(_size).fill(0)
    }
    for(let i=0; i<_size; i++){
        //iterate the border, and fill the grapheKopie with all cases connected to the border
        //the rest remain in false
        for(let j=0; j<_size; j++){
            if((graphe[i][j] === 1)&&( i===0||i===_size-1 ||j ===0 || j===_size-1)){
                openRegionFromOneBorderNodeBfs([i, j], grapheCopie, graphe)
            }
        }
    }
    return grapheCopie;
}

function openRegionFromOneBorderNodeBfs(borderNode, grapheCopie, graphe){
    let queue = [];
    let openNodesVal = []
    openNodesVal.push(borderNode)
    queue.push(borderNode);
    while(queue.length){
        const dequeueNode = queue.shift();
        //need to change the value of visited node, sinon infinit looP
        grapheCopie[dequeueNode[0]][dequeueNode[1]] = 2;
        openNodesVal.push(dequeueNode);
        isfeasible(dequeueNode, queue, graphe, grapheCopie);
    }
}

function isfeasible(borderNode, queue, graphe, grapheCopie){
    const [x, y] = borderNode;
    if(x+1 < _size && (grapheCopie[x+1][y] == 0) && (graphe[x+1][y] == 1)){
        queue.push([x+1, y])
    }
    if(y+1 < _size && (grapheCopie[x][y+1] == 0) && (graphe[x][y+1] == 1) ){
        queue.push([x, y+1])
    }
    if(x-1 >= 0 && (grapheCopie[x-1][y] == 0) && (graphe[x-1][y] == 1) ){
        queue.push([x-1, y])
    }
    if(y-1 >= 0 && (grapheCopie[x][y-1] == 0) && (graphe[x][y-1] == 1) ){
        queue.push([x, y-1])
    }
}


const graph = [
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
]

let grapheCopie = fill(graph);


console.log(grapheCopie[0])
console.log(grapheCopie[1])
console.log(grapheCopie[2])
console.log(grapheCopie[3])