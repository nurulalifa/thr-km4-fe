function addMoreData(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

console.log(addMoreData({ name: 'Edo', age: 20 }, 'address', 'Jakarta')); 
// output: { name: 'Edo', age: 20, address: 'Jakarta' }

console.log(addMoreData({ name: 'Edo', age: 20 }, 'hobbies', ['coding', 'reading'])); 
// output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

console.log(addMoreData({ name: 'Edo', age: 20 }, 'isMarried', false)); 
// output: { name: 'Edo', age: 20, isMarried: false }
