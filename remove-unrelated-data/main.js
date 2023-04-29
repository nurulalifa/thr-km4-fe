function removeUnrelated(obj, prop) {
    delete obj[prop];
    return obj;
  }
  const obj1 = { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] };
  const obj2 = { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] };
  const obj3 = { name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] };
  
  console.log(removeUnrelated(obj1, 'address')); // Output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }
  console.log(removeUnrelated(obj2, 'hobbies')); // Output: { name: 'Edo', age: 20, address: 'Jakarta' }
  console.log(removeUnrelated(obj3, 'name')); // Output: { age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }