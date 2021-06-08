const ajacentGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
]

class Node{
    constructor(val){
        this.value = val;
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let node = new Node(val);
        if(!this.size){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }

    dequeue(){
        if(!this.size){
            return null;
        }
        const dequeueNode = this.first;
        this.first = dequeueNode.next;
        if(!this.first){
            this.last = null;
        }
        this.size--;
        return dequeueNode;
    }
}

function graphDistance(graph, rootNode){
    const queue = new Queue();
    const bfs = {};
    let distance = 1;

    let len = graph.length;
    for(let i = 0; i<len; i++){
        bfs[i] = Infinity;
    }
    bfs[rootNode] = graph[rootNode][rootNode];
    queue.enqueue(rootNode);
    while(queue.size){
        const dequeueNode = queue.dequeue();
        graph[dequeueNode.value].forEach((vertex, index)=>{
            if(vertex == 1 && bfs[index] == Infinity){
                queue.enqueue(index);
                bfs[index] = distance; 
                distance++;
            }
        })
    }
    return bfs;
}

let distanceOjb = graphDistance(ajacentGraph, 1);