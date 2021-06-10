class Node{
    constructor(val){
        this.val = val;
        this.next = [];
    }
}
/**
 * keys to solve *
 * one queue to track the original graph 
 * push to the queue only when the node is not existed on map
 * map: use the original graphe val as key, store the copied graphe Node*
 */

function cloneGraphe(beginNode){
    const queue=[];
    const map = new Map();

    if(!beginNode)
        return null;
    queue.push(beginNode);
    const beginNodeCopie = new Node(beginNode.val);
    map.set(beginNode.val, beginNodeCopie);
    while(queue.length){
        const dequeueNode = queue.shift();
        const dequeueNodeCopie = map.get(dequeueNode.val);
        const neighbours = dequeueNode.next;
        if(neighbours.length){
            for(let neighbour of neighbours){
                let neighbourCopie = map.has(neighbour.val)
                if(!neighbourCopie){
                    neighbourCopie = new Node(neighbour.val);
                    map.set(neighbour.val, neighbourCopie);
                    queue.push(neighbour);
                }
                dequeueNodeCopie.next.push(neighbour);
            }
        }
    }
    return beginNodeCopie;
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
n1.next.push(n2, n4);
n2.next.push(n1, n3);
n3.next.push(n2, n4);
n4.next.push(n1, n3);

let c = cloneGraphe(n1);
console.log('C',c);