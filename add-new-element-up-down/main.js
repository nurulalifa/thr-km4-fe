function addNewElementUpDown(array, element, position) {
  const newArray = [...array];
  if (position === 'up') {
    newArray.unshift(element);
  } else if (position === 'down') {
    newArray.push(element);
  }
  return newArray;
}

console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, 'up')); 
// output: [6, 1, 2, 3, 4, 5]

console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, 'down')); 
// output: [1, 2, 3, 4, 5, 6]

console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", 'up')); 
// output: ["Rudi", "Edo", "Budi", "Joko", "Tono"]

console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", 'down')); 
// output: ["Edo", "Budi", "Joko", "Tono", "Rudi"]