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

const arr1 = [
    ["Samsung", 800 ],
    ["Panasonic", 120],
    ["Sony", 440], 
    ["LG", 350], 
 ];
/**
 * List ==> tree *
 * @param {Array} arr
 * @return {*}
 */
let m = arr.map(a => [a.id, a])
let b = new Map(m)
let fromobj = Object.entries(arr)
let c = new Map(fromobj)
// console.log(a)
// console.log(a.get('Samsung'), a.get('samsung'))
// console.log(m)
// console.log(b)
// console.log(fromobj)
// console.log(c.entries())
// console.log(Object.fromEntries(c.entries()))

// console.log(typeof(a))
// console.log(a instanceof Map)
// console.log(a instanceof WeakMap)

let a = new Map()
let w = new WeakMap()
let wk = [1]
w.set(wk, 75)
a.set(wk, 75)
console.log(a)
console.log(w.get(wk))
wk = null
console.log(a)
console.log(w.get(wk))

const map = new Map();
map.set('0', '0 string')
map.set(0, '0  number')
map.set("1", true).set(2,false).set({name:"John"}, {flag:true})
console.log(map)

/**
 * resume *
 */

//only the key paired array can be mappd, like [[1, 'a'],[2, 'b']]
//Object.fromEntries(map.entries())
//WeakMap must take object as key, removed if the key is set to null or removed
//The keys of an Object must be either a String or a Symbol. A Map's keys can be any value, including functions, objects, or any primitive.
//The keys of a Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values in the order of entry insertion. In the Objects, the keys are sorted in defined sort order.
//The number of items in a Map are retrieved from the size property. The number of items in an Object must be determined manually.
//Map performs better in scenarios involving frequent additions and removals of key-value pairs. Objects are not optimized for frequent additions and removals of key-value pairs.

