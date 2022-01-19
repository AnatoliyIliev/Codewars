function maxTriSum(numbers) {
  let num = new Set(numbers);
  let n = 0;
  numbers.forEach(number => {
    if (Math.abs(number) >= 3) {
      num.push(number);
    }
  });
  for (let i = 0; i < 3; i += 1) {
    console.log(num[i]);
    n += num[i];
  }
  return n;
}

// console.log(maxTriSum([3, 2, 6, 8, 2, 3])); //, 17);
// console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])); //, 32);
// console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])); //, 18);
console.log(maxTriSum([-3, -27, -4, -2, -27, -2])); //, -9);
// console.log(maxTriSum([-14, -12, -7, -42, -809, -14, -12])); //, -33);
// console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67])); //, 232);
// console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29])); //, 41);
// console.log(maxTriSum([-2, 0, 2])); //, 0);
// console.log(maxTriSum([-2, -4, 0, -9, 2])); //, 0);
// console.log(maxTriSum([-5, -1, -9, 0, 2])); //, 1);

/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .
3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou
*/
