function numberOfPairs(gloves) {
  let pair = {};
  let result = 0;
  gloves.forEach(glo => {
    if (glo in pair) pair[glo] += 1;
    else pair[glo] = 1;
  });
  for (let key in pair) {
    result += Math.floor(pair[key] / 2);
  }

  return result;
}

console.log(numberOfPairs(['red', 'red'])); //,1
console.log(numberOfPairs(['red', 'green', 'blue'])); //,0]
console.log(
  numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']),
); //,3]
console.log(
  numberOfPairs([
    'Navy',
    'Green',
    'Maroon',
    'Lime',
    'Navy',
    'Gray',
    'White',
    'Maroon',
    'Teal',
    'Silver',
    'White',
    'Blue',
    'Gray',
    'Black',
    'Lime',
    'Black',
    'White',
    'Silver',
    'Silver',
    'Lime',
    'Teal',
    'Gray',
    'White',
    'Silver',
    'Black',
    'White',
    'Lime',
    'Yellow',
    'Red',
    'Red',
    'White',
    'Aqua',
    'Black',
    'Maroon',
    'Purple',
    'Silver',
    'Yellow',
    'Navy',
    'Green',
    'Olive',
    'Navy',
    'Blue',
    'Maroon',
    'Blue',
    'Red',
    'Blue',
    'Fuchsia',
    'Green',
    'Olive',
    'Teal',
    'Black',
    'Black',
    'Teal',
    'Lime',
    'Navy',
    'Green',
    'Lime',
    'Fuchsia',
    'Fuchsia',
    'White',
    'Maroon',
    'Green',
    'Yellow',
    'Lime',
    'Green',
    'Navy',
    'Teal',
    'Maroon',
    'White',
    'White',
    'Black',
    'Lime',
    'Navy',
    'Olive',
    'Gray',
    'Teal',
    'Aqua',
    'Green',
    'Green',
    'Red',
    'Navy',
    'Navy',
    'Gray',
    'Lime',
    'Green',
    'Lime',
    'Maroon',
    'Teal',
    'Black',
    'Navy',
    'Maroon',
    'Red',
    'Green',
    'Purple',
    'Black',
    'Purple',
    'Silver',
    'Olive',
    'Black',
    'Olive',
  ]),
); //,46]

/*

Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)

*/
