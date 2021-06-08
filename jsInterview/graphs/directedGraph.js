class DirectedGraphe{
    constructor(){
        this.adjacencyList = new Map();
        this.vertexNumber = 0;
        this.dfsTraversValues = [];
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
    }
    removeEdg(source, destination){
        this.adjacencyList.get(source) = this.adjacencyList[source].filter(v => v!=destination);
    }
    removeVertex(vertex){
        if(this.adjacencyList.get(vertex))
            this.adjacencyList.delete(vertex);
    }
    getAdjacencyList(){
        return this.adjacencyList;
    }
    getVertexNum(){
        return this.vertexNumber;
    }

    dfsWrapper(vertex){
        let visited = new Array(this.vertexNumber).fill(false);
        this.dfs(vertex, visited);
        return {values: this.dfsTraversValues, visited: visited};
    }
    dfs(vertex, visitedArray){
        if(!visitedArray[vertex]){
            visitedArray[vertex] = true;
            this.dfsTraversValues.push(vertex);
            this.adjacencyList.get(vertex).forEach(v =>{
                this.dfs(v, visitedArray);
            })
        }
    }
}

//graphe like in the directdgraphe.gif
let g = new DirectedGraphe();
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,2);
g.addEdge(2,0);
g.addEdge(2,3);
g.addEdge(3,3);
console.log(g.getVertexNum());
console.log(g.getAdjacencyList());
let vs = g.dfsWrapper(1);
console.log(vs);