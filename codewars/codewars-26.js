var ArrowFunc = function (arr) {
  return arr.map(num => String.fromCharCode(num)).join('');
};

console.log(ArrowFunc([84, 101, 115, 116])); // 'Test', 'Convert those numbers to letters'
console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72])); // 'FUS ROH DAH', 'Keep it up!'

/*
Функции стиля стрелки
Приходите сюда, чтобы попрактиковаться в функциях стиля Arrow Больше нечего сказать удачи!
Подробности
Вам будет предоставлен массив чисел, который можно использовать с помощью метода String.fromCharCode()(JS), 
Tools.FromCharCode() (C#) для преобразования числа в символ. Рекомендуется отображать массив чисел и 
преобразовывать каждое число в соответствующий символ ascii.

Примеры
Это пример того, как преобразовать число в символ ascii:
Javascript => String.fromCharCode(97) // a
C# =>Tools.FromCharCode(97) // a

Ссылка: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


*/
