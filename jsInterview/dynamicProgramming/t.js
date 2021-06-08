
let obj = {}
obj['34'] = [1,2]
obj['34'] = [2,2]
obj['45'] = [2,2]
console.log(obj)

let map = new Map();
let a = [3,4];
let b = [3,4];
let str1 = 'a';
let str2 = 'a';
map.set(a,  1);
map.set(b, 2);
map.set([1,2], 5);
map.set([1,2], 6);
console.log(map.get(a))