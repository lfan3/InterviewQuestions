const graphe = [
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 1, 0]
]

const _size = 4;

/**
 * dfs method *
 */

function paintdfs(y, x){
    if(graphe[y][x] === 0 || graphe[y][x] === 2)
        return;
    if(graphe[y][x] === 1)
        graphe[y][x] = 2;
    if(y +1 < _size )
        paintdfs(y+1, x);
    if(y-1>=0)
       paintdfs(y-1, x);
    if(x+1 < _size)
        paintdfs(y, x+1);
    if(x-1 >=0)
        paintdfs(y, x-1);
}

//same as the above, version refactory
function paintdfs1(y, x){
    if(!(x<_size && y<_size && x >=0 && y>=0))
        return;
    if(graphe[y][x] === 0 || graphe[y][x] === 2)
        return;
    if(graphe[y][x] === 1)
        graphe[y][x] = 2;
    paintdfs1(y+1, x);
    paintdfs1(y-1, x);
    paintdfs1(y, x+1);
    paintdfs1(y, x-1);
}

/**
 * bfs method *
 */

function paintbfs(x, y){
    const queue = [];
    queue.push([x, y]);
    const start_color = graphe[x][y];

    while(queue.length){
        let [dx, dy] = queue.shift();
        graphe[dx][dy] = 2;
        checkAndPushQueue(dx, dy, queue, start_color);
    }
}

function checkAndPushQueue(x, y, queue, color){
    if(graphe[x+1] && graphe[x+1][y] === color)
        queue.push([x+1, y]);
    if(graphe[x-1] && graphe[x-1][y] === color)
        queue.push([x-1, y]);
    if(graphe[x] && graphe[x][y+1] === color)
        queue.push([x, y+1]);
    if(graphe[x] && graphe[x][y-1] === color)
        queue.push([x, y-1]);
}

paintbfs(0,2);
console.log(graphe[0])
console.log(graphe[1])
console.log(graphe[2])
console.log(graphe[3])