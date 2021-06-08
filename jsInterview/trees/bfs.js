const fs = require('fs');
/**
 * use the tree object stored in tree.json *
 */

let tree = [];
try{
    const data = fs.readFileSync('./tree.json');
    tree = JSON.parse(data);
}catch(error){
    console.log(error);
}

/**
 * create the Queue data structure *
 */

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if(!this.size){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    dequeue(){
        if(!this.size) return false;
        const dequeueNode = this.first;
        this.first = dequeueNode.next;
        dequeueNode.next = null;
        if(!this.first){
            this.last = this.first;
        }
        this.size--;
        return dequeueNode
    }
}

/**
 * handel tree *
 * in this tree, we have two root node (two trees in fact)
 * handle only one strick tree
 */
function bfs(treeRoot){
    let treeValues = [];
    if(!treeRoot)
        return null;
    const queue = new Queue();
    queue.enqueue(treeRoot);
    while(queue.size){
        let dequeueNode = queue.dequeue();
        let {children} = dequeueNode.value;
        if(children){
            children.forEach(ch => queue.enqueue(ch))
        }
        treeValues.push(dequeueNode)
    }
    return treeValues;
}

console.log(bfs(tree[0]))
console.log(bfs(tree[1]))

