
const fs = require('fs')

const arr = [
    {id: 2, content:'CORS', parent:1},
    {id: 3, content:'AXIOS', parent:1},
    {id: 5, content:'~', parent:6},
    {id: 1, content:'jscontent'},
    {id: 6, content:'Event Loop'},
    {id: 9, content:'webpack/rollup',parent:5},
    {id: 4, content:'Serverless', parent:3},
    {id: 7, content:'Serverless', parent:3},
    {id: 10, content:'Serverless', parent:2},
    {id: 11, content:'Serverless', parent:2},
]

/**
 * array to tree *
 */

function arr2tree(arr){
    let tree = [];
    let map = new Map(arr.map(a=>[a.id, a]))

    for(let i=0; i<arr.length; i++){
        let item = arr[i];
        if(item.parent){
            let parentItem = map.get(item.parent);
            let {children} = parentItem;
            if(children){
                parentItem.children.push(item)
            }else{
                parentItem.children = [item]
            }
        }else{
            tree.push(item)
        }
    }
    return tree;
}

/**
 * change the tree to json and store it in the file *
 */

let tree = arr2tree(arr);
let treeT = JSON.stringify(tree);
fs.writeFile('tree.json', treeT, function(error){
    if(error) throw error;
    console.log('saved!')
})



