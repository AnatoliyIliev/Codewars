function strCount(arr) {
  let res = 0;
  const non = [false, true, null, undefined, NaN];
  if (!non.includes(arr)) {
    if (Array.isArray(arr)) {
      arry(arr);
    } else if (typeof arr === 'string') {
      res += 1;
    } else if (typeof arr === 'object') {
      arry(Object.values(arr));
    }
    return res;
  }

  function arry(array) {
    array.forEach(b => {
      if (typeof b === 'string') {
        res += 1;
      } else if (Array.isArray(b)) {
        arry(b);
      } else if (typeof b === 'object') {
        if (b) {
          arry(Object.values(b));
        }
      }
    });
  }
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: { three: 'z', four: 'd', five: ['anytime', 2, 3, 4] },
    eight: [1, 2, 3, 4, '0', { one: 'a', two: 's' }],
    ten: ['and another', 2, 'and again', [undefined, 'and again'], false],
    eleven: {},
  }),
); //,12,"Did not count the correct number of strings. Check counting inside nested objects.");

console.log(
  strCount(['and another', 2, 'and again', [undefined, 'and again'], false]),
);

/*
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/

/*
  function strCount(obj){
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
}
*/
