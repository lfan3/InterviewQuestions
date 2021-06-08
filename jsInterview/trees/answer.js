//第一题: parseQueryString

function parseQueryString(url){
    let result = {key : ''};

    const questionMarkIndex = url.indexOf('?');
    const equalMarkIndex = url.indexOf('=');
    if(questionMarkIndex === -1 || equalMarkIndex === -1)
      return result
    const paramsPaire = url.slice(questionMarkIndex + 1).split('&');
    result = paramsPaire.reduce((accumulator, currentValue) => (Object.assign(accumulator, {[currentValue.split('=')[0]] : currentValue.split('=')[1]})), {});
    return result
}

//第二题:
const arr = [
    {id: 2, content:'CORS', parent:1},
    {id: 3, content:'AXIOS', parent:1},
    {id: 5, content:'~', parent:6},
    {id: 1, content:'jscontent'},
    {id: 6, content:'Event Loop'},
    {id: 9, content:'webpack/rollup',parent:5},
    {id: 7, content:'Serverless', parent:3},
]

/**
 * List ==> tree *
 * @param {Array} arr
 * @return {*}
 */

function arr2tree(arr){
    let arrMap = new Map(arr.map(a => [a.id, a]));
    let tree = [];

    for(let i=0; i<arr.length; i++){
        let item = arr[i];
        if(item.parent){
            const parent = arrMap.get(item.parent);
            const {children} = parent;
            if(children){
                parent.children.push(item)
            }else{
                parent.children = [item]
            }
        }else{
            tree.push(item)
        }        
    }
    return tree;
}



