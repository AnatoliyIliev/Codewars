function code(s) {
  // your code
}

function decode(s) {
  // your code
}

const data1 =
  'What do you remember? When I looked at his streaky glasses, I wanted ' +
  'to leave him. And before that? He stole those cherries for me at midnight. We were walking ' +
  'in the rain and I loved him. And before that? I saw him coming ' +
  'toward me that time at the picnic, edgy, foreign.';

const data2 =
  "Some say the world will end in fire, Some say in ice. From what I've tasted of desire " +
  'I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate' +
  ' To say that for destruction ice Is also great And would suffice.';

const data1Sol =
  '\vctg?.nadr d gdbW\n\v,i    lnis tl eh\n\v mtIAakietboaara\n\veeo nnigsoe st?t\n\vd wsddnh lfls   \n\vgaaa  gtfeoeehWd\n' +
  '\vytrwbI .o rasiho\n\v, d e i rtev,se \n\v t hflnW h e  ny\n\vfhmioo emot Is o\n\voeemrvt eshh tIu\n\vr   eehw eaiwr  \n' +
  '\veptc deea tmaelr\n\viihot  rtc?.naoe\n\vgcamhhre h  tkom\n\vnntiaia meHAeyke\n\v.i ntmiwirend em';

const data2Sol =
  "fa  h ttrheI ilS\nitifakw   s'irdo\nc cotnihftivce m\neAereocaihree,we\n.n   wedroe . i \n\vdIdT , es t Sls\n\v seoe t.eIaFola\n" +
  '\vw s nIo   srm y\n\voatso  Bwhtoee \n\vulrautpuhoem nt\n\vlsuyghetold sdh\n\vdoc hir  d wa e\n\v  tt niif ohyi \n\vsgihoksfawfa nw\n' +
  '\vuroaf h vi ti o\n\vfent I iotd nfr';

console.log(code(data1)); //, data1Sol);
console.log(code(data2)); //, data2Sol);
console.log(code('')); //, '');
console.log(decode('')); //, '');
console.log(decode(data2Sol)); //, data2);

/*
5 kyu  Coding with Squared Strings

A squared string has n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop" is a squared string of size 4.

We will use squared strings to code and decode texts. To make things easier we suppose that our original text doesn't include the character '\n'.

Coding
Input:

a text t of length l.
Consider the smallest integer n such that n * n be greater or equal to l.
Complete t with the char of ascii code 11 (we suppose that this char is not in our original text) until the length of t is n * n.
From now on we can transform the new t in a squared string s of size n by inserting '\n' where needed.
Apply a clockwise rotation of 90 degrees to s: that's it for the coding part.
Decoding
Input:

a squared string s resulting from the coding
Apply a counter-clockwise rotation of 90 degrees to s
Do some cleaning to have the original text t
You can see clockwise rotation of 90 degrees: http://www.codewars.com/kata/56dbeec613c2f63be4000be6 
You can see counter-clockwise rotation of 90 degrees: http://www.codewars.com/kata/56dbf59b0a10feb08c000227

Example:
t = "I.was.going.fishing.that.morning.at.ten.o'clock"

code(t) -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"

decode(code(t)) == "I.was.going.fishing.that.morning.at.ten.o'clock"

(Dots indicate spaces since they are quite invisible).

Notes:
Swift : character 11 is replaced by "\u{F7}" (ie "÷" - alt 246 -)

Ocaml : character 11 is replaced by '&'

Perl : character 11 is replaced by '&'

Fortran: Your returned string for both functions are not permitted to contain 
redundant leading/trailing whitespace. In return, you may safely assume 
that all input strings passed into your function(s) will not contain
 redundant leading/trailing whitespace, i.e. you do not and should not trim the input string before operating on it

Don't use this coding to keep your secrets:-)

FUNDAMENTALSSTRINGSCIPHERSCRYPTOGRAPHY



Строка в квадрате состоит из n строк, каждая подстрока состоит из n символов: Например:

s = "abcd\nefgh\nijkl\nmnop" — это квадратная строка размера 4.

Мы будем использовать квадратные строки для кодирования и декодирования текстов. Для простоты предположим, что исходный текст не содержит символа '\n'.

Кодирование
Вход:

текст t длины l.
Рассмотрим наименьшее целое число n такое, что n * n больше или равно l.
Дополните t символом ascii-кода 11 (мы предполагаем, что этого символа нет в нашем исходном тексте), пока длина t не станет n * n.
С этого момента мы можем преобразовать новое t в квадратную строку s размера n, вставив '\n' там, где это необходимо.
Примените поворот по часовой стрелке на 90 градусов к s: это все для части кодирования.
Расшифровка
Вход:

квадратная строка s, полученная в результате кодирования
Примените поворот против часовой стрелки на 90 градусов к s
Сделайте некоторую очистку, чтобы иметь исходный текст t
Вы можете увидеть поворот по часовой стрелке на 90 градусов: http://www.codewars.com/kata/56dbeec613c2f63be4000be6 Вы можете увидеть поворот против часовой стрелки на 90 градусов: http://www.codewars.com/kata/56dbf59b0a10feb08c000227

Пример:
t = «Я.шел.на.рыбалку.тем.утром.в.десять.часов»

code(t) -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"

decode(code(t)) == "Я.шел.на.рыбалку.тем.утром.в.десять.часов"

(Точки обозначают пробелы, так как они совершенно невидимы).

Заметки:
Swift: символ 11 заменен на "\u{F7}" (т.е. "÷" - alt 246 -)

Ocaml : символ 11 заменен на «&»

Perl: символ 11 заменяется на '&'

Fortran: ваша возвращаемая строка для обеих функций не может содержать избыточные начальные/конечные пробелы. В свою очередь, вы можете с уверенностью предположить, что все входные строки, переданные в ваши функции, не будут содержать избыточных начальных/конечных пробелов, т. е. вы не должны и не должны обрезать входную строку перед операцией с ней.

Не используйте это кодирование, чтобы сохранить свои секреты :-)
*/
