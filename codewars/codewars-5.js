function list(names) {
  if (!names.length) {
    return '';
  } else {
    const newNames = names.map(name => name.name);
    if (names.length === 1) {
      return newNames.join();
    } else {
      const lastName = newNames.pop();
      return `${newNames.join(', ')} & ${lastName}`;
    }
  }
}

console.log(
  list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Homer' },
    { name: 'Marge' },
  ]),
);
//'Bart, Lisa, Maggie, Homer & Marge','Must work with many names',

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// //'Bart, Lisa & Maggie','Must work with many names'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }])); //'Bart & Lisa', 'Must work with two names',

console.log(list([{ name: 'Bart' }])); //'Bart', 'Wrong output for a single name  Неправильный вывод для одного имени',

console.log(list([])); // '', 'Must work with no names Должен работать со многими именами'

/*
Дано: массив, содержащий хеши имен

Возврат: строка, отформатированная как список имен, 
разделенных запятыми, за исключением последних двух имен,
которые должны быть разделены амперсандом.
Примечание: все хэши предварительно проверены и 
будут содержать только A-Z, a-z, '-' и '.'.


Given: an array containing hashes of names

Return: a string formatted as a list of names separated 
by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

*/
