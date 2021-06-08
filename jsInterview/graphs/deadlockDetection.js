let map = new Map();
map.set(0, null);
map.set(1, 0);
map.set(2, null);
map.set(4, [0,3]);
map.set(3, [4,5]);

map.set(5, [1,4]);

console.log(map)

/**
 * return recursive fn, souvent oublie *
 */

function findCycleDfs(map, key, target){
    let values = map.get(key);
    if(values && values.includes(target)){
        return true
    }

    if(values){
        for(const val of values){
            if(findCycleDfs(map, val, target))
                return true;
        }
      
    }
    return false
}

function iterate(){
    //inite every map
    let keys = map.keys();
    for(const k of keys){
        if(findCycleDfs(map, k, k)){
            console.log(k)
            return true;
        }
    }

    return false;
}

//console.log(findCycleDfs(map, 3, 3))
console.log(iterate())
console.log(map)