function* foo(index) {
  yield 1;
  yield 5;
  yield 10;

}

const iterator = foo(0);

// console.log(iterator.next());

// console.log(iterator.next().value);
// console.log(iterator.next().value);

for(let i=0; i< 3; i++){
	console.log(foo(0).next());
}
