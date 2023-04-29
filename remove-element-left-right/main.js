function removeLeftRight(array, position) {
  if (position === 'left') {
    array.shift();
  } else if (position === 'right') {
    array.pop();
  }
  return array;
}

console.log(removeLeftRight([1, 2, 3, 4, 5], 'left')); // [2, 3, 4, 5]
console.log(removeLeftRight([1, 2, 3, 4, 5], 'right')); // [1, 2, 3, 4]
console.log(removeLeftRight(['Edo', 'Budi', 'Joko', 'Tono'], 'left')); // ['Budi', 'Joko', 'Tono']
console.log(removeLeftRight(['Edo', 'Budi', 'Joko', 'Tono'], 'right')); // ['Edo', 'Budi', 'Joko']