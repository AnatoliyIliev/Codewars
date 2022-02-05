// // other bases
// convert(
//   '0',
//   '0123456789',
//   'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
// ); // should return "a"
// convert('27', '0123456789', 'abcdefghijklmnopqrstuvwxyz'); // should return "bb"
// convert('hello', 'abcdefghijklmnopqrstuvwxyz', '0123456789abcdef'); // should return "320048"
// convert('SAME', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // should return "SAME"

// var Alphabet = {
//   BINARY: '01',
//   OCTAL: '01234567',
//   DECIMAL: '0123456789',
//   HEXA_DECIMAL: '0123456789abcdef',
//   ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
//   ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA_NUMERIC:
//     '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
// };

// convert('15', '0123456789', '01'); // should return "1111"
// convert('15', '0123456789', '01234567'); // should return "17"
// convert('1010', '01', '0123456789'); // should return "10"
// convert('1010', '01', '0123456789abcdef'); // should return "a"

function convert(input, source, target) {
  if (source === target) {
    return input;
  }
  let sourceValue = input
    .split('')
    .reverse()
    .reduce((acc, val, digitPos) => {
      return acc + Math.pow(source.length, digitPos) * source.indexOf(val);
    }, 0);

  if (sourceValue === 0) {
    return target[0];
  }
  let targetValue = '';
  while (sourceValue > 0) {
    targetValue += target[sourceValue % target.length];
    sourceValue = Math.floor(sourceValue / target.length);
  }
  return targetValue.split('').reverse().join('');
}

var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC:
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

var bin = Alphabet.BINARY,
  oct = Alphabet.OCTAL,
  dec = Alphabet.DECIMAL,
  hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER,
  alup = Alphabet.ALPHA_UPPER,
  alpha = Alphabet.ALPHA,
  alnum = Alphabet.ALPHA_NUMERIC;

console.log(convert('15', dec, bin)); // '1111', '"15" dec -> bin');
// console.log(convert('15', dec, oct)); // '17', '"15" dec -> oct');
// console.log(convert('1010', bin, dec)); // '10', '"1010" bin -> dec');
// console.log(convert('1010', bin, hex)); // 'a', '"1010" bin -> hex');

// console.log(convert('0', dec, alpha)); // 'a', '"0" dec -> alpha');
// console.log(convert('27', dec, allow)); // 'bb', '"27" dec -> alpha_lower');
// console.log(convert('hello', allow, hex)); // '320048', '"hello" alpha_lower -> hex')
// console.log(convert('SAME', alup, alup)); // 'SAME', '"SAME" alpha_upper -> alpha_upper');

/*
In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets. Here are some pre-defined alphabets:

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.

Examples
// convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will probably be too large for Int.
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers



function convert(input, source, target) {
  if (source === target) {
    return input;
  }

  // Compute the value of the input in source base
  // then convert it to value in target base
  let sourceValue = input.split('').reverse().reduce( (acc, val, digitPos) => {
    return acc + Math.pow(source.length, digitPos) * source.indexOf(val);
  }, 0);

  if (sourceValue === 0) {
    return target[0];
  }

  // convert source value to value in target base
  let targetValue = '';
  while (sourceValue > 0) {
    targetValue += target[sourceValue % target.length];
    sourceValue = Math.floor(sourceValue / target.length);
  }
  return targetValue.split('').reverse().join('');
}


Best Practices
Py First:

def convert(input, source, target):
    base_in = len(source)
    base_out = len(target)
    acc = 0
    out = ''
    for d in input:
        acc *= base_in
        acc += source.index(d)
    while acc != 0:
        d = target[acc%base_out]
        acc = acc/base_out
        out = d+out
    return out if out else target[0]
Py Second:

from math import log

def convert(value, source, target):
    value = sum(source.find(c) * (len(source) ** i) for i, c in enumerate(reversed(value)))
    return ''.join(target[(value / (len(target) ** i)) % len(target)] for i in xrange(0 if not value else int(log(value, len(target))),-1,-1))
Py Third:

def to_base(n, base, alphabet):
    if n < base:
        return alphabet[n]
    else:
        q, r = divmod(n, base)
        return to_base(q, base, alphabet) + alphabet[r]

def convert(input, source, target):
    b = len(source)
    n = sum(source.index(x) * b ** i for i, x in enumerate(reversed(input)))
    return to_base(n, len(target), target)
*/
