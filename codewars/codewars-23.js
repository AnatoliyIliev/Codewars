function opposite(number) {
  return number < 0 ? Math.abs(number) : number * -1;
}
console.log(opposite(1)); // -1
console.log(opposite(-1)); // 1

/*
Very simple, given an integer or a floating-point number, 
find its opposite.

1: -1
14: -14
-34: 34
*/
