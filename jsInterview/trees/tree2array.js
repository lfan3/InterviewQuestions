/**
 * tree to array *
 */

function tree2array(node, treeValues = []){
    //push value onto array FIRST
    treeValues.push({id:node.id, content:node.content});

    //recursively call function on all node children
    if (node.children && node.children.length !== 0) {
      node.children.forEach(child => {
        tree2array(child, treeValues);
      });
    }
    return treeValues;
}

function readTreeAndToPlatenArray(tree){
    let alltrees = [];

    for(let i =0; i < tree.length; i++){
        let root = tree[i];
        //let treeVal = preOrderdfs(root)
        let treeVal = tree2array(root)
        alltrees.push(treeVal)
    }
    let r = alltrees.reduce((acc, curr)=>{
        return [...acc, ...curr]
    }, [])
    return r;
}

