function strCount(obj) {
  let res = 0;
  Object.values(obj).forEach(a => {
    if (Array.isArray(a)) {
      console.log(a);
      if (a !== 0) {
        a.forEach(b => {
          if (typeof b === 'string') {
            res += 1;
          }
        });
      }
    } else if (typeof a === 'string') {
      res += 1;
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
    seventh: {},
  }),
); //,3,"Did not count the correct number of strings. Check counting inside nested objects.");

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
