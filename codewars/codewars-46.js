function strCount(obj) {
  let res = 0;
  Object.values(obj).forEach(a => {
    if (Array.isArray(a)) {
      console.log('Array -->', a);
      if (a !== 0) {
        a.forEach(b => {
          if (typeof b === 'string') {
            console.log('string -->', b);
            res += 1;
          }
        });
      }
    } else if (typeof a === 'string') {
      res += 1;
    } else if (typeof a === 'object') {
      console.log('object -->', a);
      // console.log(Object.values(a));
    }
  });
  return res;
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: { three: 'z', four: 'd' },
    eight: [1, 2, 3, 4, '0', { one: 'a', two: 's' }],
    ten: ['and another', 2, 'and again', [undefined, 'and again'], false],
    eleven: {},
  }),
); //,11,"Did not count the correct number of strings. Check counting inside nested objects.");

/*
console.log(strCount({{
  first: '1',
  second: '2',
  third: false,
  fourth: [ 'anytime', 2, 3, 4 ],
  fifth: null,
  sixth: undefined,
  seventh: {}
}
[ '1', 2, '3', '4' ]
[
  '1',
  2,
  '3',
  [ 'and another', 2, 'and again', [ undefined, 'and again' ], false ],
  '4'
]})); //expected 5 to equal 6

console.log(strCount({[
  'strin', 'strin', 'strin',
  'strin', 'strin', 'strin',
  'strin', 'strin', 'strin',
  'strin', 'strin', 'strin',
  'strin', 'strin', 'strin',
  'strin', 'strin', 'strin',
  'strin', 'strin', 'strin',
  'strin', 'strin', 'strin',
  'strin'
]
[
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin', 'strin', 'strin', 'strin',
  'strin'
]
[
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin',
  [ 1, 2, 3, 4, '0', { one: 'a', two: 's' } ],
  'strin'
]})); //expected 25 to equal 49
*/
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



    //   let res = 0;
  //   Object.values(obj).forEach(a => {
  //     if (typeof a === 'object') {
  //       console.log(a);
  //       if (a !== 0) {
  //         a.forEach(b => {
  //           if (typeof b === 'string') {
  //             res += 1;
  //           }
  //         });
  //       }
  //     } else if (typeof a === 'string') {
  //       res += 1;
  //     }
  //   });
  //   return res;
*/
