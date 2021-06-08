class undirectedGraphe{
    constructor(){
        this.adjacencyList = new Map();
        this.vertexNumber = 0;
        this.dfsvalues = [];
        this.bfsvalues = [];
    }
    addVertex(vertex){
        if(!this.adjacencyList.get(vertex)){
            this.adjacencyList.set(vertex, []);
            this.vertexNumber++;
        }
    }
    addEdge(source, destination){
        this.addVertex(source);
        this.addVertex(destination);
        this.adjacencyList.get(source).push(destination);
        this.adjacencyList.get(destination).push(source);

        return this.vertexNumber;
    }
    removeEdg(source, destination){
        this.adjacencyList.get(source) = this.adjacencyList[source].filter(v => v!=destination);
        this.adjacencyList.get(destination) = this.adjacencyList[destination].filter(v => v!=source);
    }
    removeVertex(vertex){
        if(this.adjacencyList.get(vertex))
            this.adjacencyList.delete(vertex);
    }
    getAdjacencyList(){
        return this.adjacencyList;
    }
    dfsWrapper(vertex){
        //visited array & dfsvalues array 
        let visited = new Array(this.vertexNumber).fill(false);
        this.dfs(vertex, visited);
        return {values: this.dfsvalues, visited: visited};
    }
    dfs(vertex, visitedArray){
        if(!visitedArray[vertex]){
            visitedArray[vertex] = true;
            this.dfsvalues.push(vertex);
            this.adjacencyList.get(vertex).forEach(v =>{
                this.dfs(v, visitedArray);
            })
        }
    }
    bfs(vertex){
        //empty queue, empty bfsvalues array & visited array
        let bfsqueue = [];
        let visited = new Array(this.vertexNumber).fill(false);
        //mettre de vertex dans la bfsqueue, bfsvalues and visited array
        visited[vertex] = true;
        this.bfsvalues.push(vertex);
        bfsqueue.push(vertex);

        while(bfsqueue.length){
            let dequeueVertex = bfsqueue.shift();
            let neighbours = this.adjacencyList.get(dequeueVertex);
            neighbours.forEach(v =>{
                if(!visited[v]){
                    this.bfsvalues.push(v);
                    visited[v] = true;
                    bfsqueue.push(v);
                }
            })
        }
        return {values: this.bfsvalues, visited: visited};
    }

}

//graphe like in the undirectdgraphe.png
let g = new undirectedGraphe();
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(1,0);
g.addEdge(2,3);
g.addEdge(4,3);
console.log(g.getAdjacencyList());
let vs = g.dfsWrapper(1);
let bs = g.bfs(2);
console.log(vs);
console.log(bs);