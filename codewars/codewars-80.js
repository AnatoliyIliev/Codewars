var WordDictionary = function () {
  this.arrey = [];
};

WordDictionary.prototype.addWord = function (word) {
  this.arrey.push(word);
};

WordDictionary.prototype.search = function (word) {
  let re = new RegExp('^' + word + '$');
  return this.arrey.find(ar => re.test(ar)) !== undefined;
};

var wd = new WordDictionary();
wd.addWord('a');
wd.addWord('at');
wd.addWord('ate');
wd.addWord('ear');
console.log(wd.search('a')); // true
console.log(wd.search('a.')); // true
console.log(wd.search('a.e')); // true
console.log(wd.search('b')); // false
console.log(wd.search('e.')); // false
console.log(wd.search('ea.')); // true
console.log(wd.search('ea..')); // false
wd.addWord('co');
wd.addWord('cod');
wd.addWord('code');
wd.addWord('codewars');
console.log(wd.search('........')); // true
console.log(wd.search('c.o')); // false
console.log(wd.search('cod.')); // true
console.log(wd.search('c.o')); // false
console.log(wd.search('co..w..s')); // true
console.log(wd.search('co..w..')); // false

/*

  let reg = new RegExp('^' + word + '$');
  return this.arr.find(v => reg.test(v)) !== undefined;

Design a data structure that supports the following two operations:

addWord (or add_word) which adds a word,
search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter
You may assume that all given words contain only lowercase letters.

Examples
addWord("bad")
addWord("dad")
addWord("mad")

search("pad") === false
search("bad") === true
search(".ad") === true
search("b..") === true
Note: the data structure will be initialized multiple times during the tests!

ALGORITHMSOBJECTS



Разработайте структуру данных, которая поддерживает следующие две операции:

addWord(или add_word), который добавляет слово,
searchкоторый ищет буквальное слово или строку регулярного выражения, содержащую строчные буквы, "a-z"или "."где "."может представлять любую букву
Можно предположить, что все заданные слова состоят только из строчных букв.

Примеры
addWord("bad")
addWord("dad")
addWord("mad")

search("pad") === false
search("bad") === true
search(".ad") === true
search("b..") === true
Примечание: во время тестов структура данных будет инициализирована несколько раз!

АЛГОРИТМЫОБЪЕКТЫ
*/
