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
5 kyu
Coding with Squared Strings

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

*/
