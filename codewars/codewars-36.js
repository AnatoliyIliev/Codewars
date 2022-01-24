function myLanguages(results) {
  return Object.keys(results)
    .sort((a, b) => results[b] - results[a])
    .filter(arr => results[arr] >= 60);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); //  ["Ruby", "Python"])
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); //  ["Dutch", "Greek", "Hindi"])
console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })); //  [])

/*
Task
You are given a dictionary/hash/object containing some languages 
and your test results in the given languages. 
Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
My other katas
If you enjoyed this kata then please try my other katas! :-)

Translations are welcome!
*/
