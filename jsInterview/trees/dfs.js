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
 * read tree with mulditple roots *
 */

function readTree(tree){
    let alltrees = [];

    for(let i =0; i < tree.length; i++){
        let root = tree[i];
        let treeVal = preOrderdfs(root)
        alltrees.push(treeVal)
    }

    return alltrees;
}

/**
 * dfs preOrder with one root node *
 */

function preOrderDfs(node, treeValues = []){
    //push value onto array FIRST
    //treeValues.push(node.id);
    treeValues.push(node);
    //recursively call function on all node children
    if (node.children && node.children.length !== 0) {
      node.children.forEach(child => {
        preOrderDfs(child, treeValues);
      });
    }
    
    return treeValues;
}

function postOrderDfs(node, treeValues = []){
    if(node.children && node.children.length !== 0){
        node.children.forEach(child =>{
            postOrderDfs(child, treeValues);
        })
    }
    treeValues.push(node)

    return treeValues
}
/**
 * inOrderBinaryTree is a little difficulte *
 */

function inOrderBinaryTree(node, treeValues = []){
    if(node.children && node.children.length !== 0){
        node.children.forEach((child, index) =>{
            if(index==0 && child)
                inOrderBinaryTree(child, treeValues)
        })
    }
    treeValues.push(node);
    if(node.children && node.children.length !== 0){
        node.children.forEach((child, index) =>{
            if(index==1 && child)
                inOrderBinaryTree(child, treeValues)
        })
    }
    return treeValues;
}

console.log('preOrderDfs \n')
console.log(preOrderDfs(tree[0]))

console.log('postOrderDfs \n')
console.log(postOrderDfs(tree[0]))

console.log('inOrderBianary\n')
tree[0].children[1].children[1] = null;
console.log(inOrderBinaryTree(tree[0]))



