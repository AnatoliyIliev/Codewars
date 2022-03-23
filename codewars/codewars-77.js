function formatDuration(seconds) {
  if (!seconds) {
    return 'now';
  } else {
    const year = Math.floor(seconds / 86400 / 365);
    const day = Math.floor((seconds / 86400) % 365);
    const hour = Math.floor((seconds / 3600) % 24);
    const minute = Math.floor((seconds / 60) % 60);
    const second = seconds % 60;

    const arrDate = [
      year > 0 ? [year, year > 1 ? 'years' : 'year'] : '',
      day > 0 ? [day, day > 1 ? 'days' : 'day'] : '',
      hour > 0 ? [hour, hour > 1 ? 'hours' : 'hour'] : '',
      minute > 0 ? [minute, minute > 1 ? 'minutes' : 'minute'] : '',
      second > 0 ? [second, second > 1 ? 'seconds' : 'second'] : '',
    ];

    let result = [];

    arrDate.forEach(arr => {
      if (arr) {
        result.push(arr.join(' '));
      }
    });

    if (result.length == 1) {
      return result.join('');
    } else if (result.length == 2) {
      result.splice(-1, 0, 'and');
      return result.join(' ');
    } else {
      for (let i = 0; i <= result.length - 3; i += 1) {
        result.splice(i, 1, result[i] + ',');
      }
      result.splice(-1, 0, 'and');
      return result.join(' ');
    }
  }
}

console.log(formatDuration(1)); // "1 second");
console.log(formatDuration(62)); // "1 minute and 2 seconds");
console.log(formatDuration(120)); // "2 minutes");
console.log(formatDuration(3600)); // "1 hour");
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds");
console.log(formatDuration(33456628));
/*

  //   const formatYear = ['year', 'years'];
  //   const formatDay = ['day', 'days'];
  //   const formatHour = ['hour', 'hours'];
  //   const formatMinute = ['minute', 'minutes'];
  //   const formatSeconds = ['second', 'seconds'];


Your task in order to complete this Kata is to write 
a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. 
If it is zero, it just returns "now". 
Otherwise, the duration is expressed as 
a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 
1 year, etc. In general, a positive integer and one of 
the valid units of time, separated by a space. 
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). 
Except the last component, which is separated by " and ", 
just like it would be written in English.

A more significant units of time will occur before than 
a least significant one. Therefore, 1 second and 
1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. 
So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. 
Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". 
It means that the function should not return 61 seconds, 
but 1 minute and 1 second instead. Formally, 
the duration specified by of a component 
must not be greater than any valid more significant unit of time.


Ваша задача для завершения этого Ката — написать функцию, 
которая форматирует продолжительность, 
заданную в виде количества секунд, удобным для человека способом.

Функция должна принимать неотрицательное целое число. 
Если он равен нулю, он просто возвращает "now". 
В противном случае продолжительность выражается 
как комбинация years, days, hoursи minutes.seconds

Гораздо проще понять на примере:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
Для целей этого Ката год равен 365 дням, а день равен 24 часам.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из таких компонентов, 
как 4 seconds, 1 year, и т. д. 
Обычно это положительное целое число и одна 
из допустимых единиц времени, разделенные пробелом. 
Единица времени используется во множественном числе, 
если целое число больше 1.

Компоненты разделяются запятой и пробелом ( ", "). 
За исключением последнего компонента, 
который отделяется " and ", 
как если бы он был написан на английском языке.

Более значимые единицы времени будут происходить раньше, 
чем наименее значимые. Поэтому 1 second and 1 year не правильно, 
а 1 year and 1 second правильно.

Разные компоненты имеют разную единицу измерения времени. 
Таким образом, нет повторяющихся единиц, как в 5 seconds and 1 second.

Компонент вообще не появится, если его значение равно нулю. 
Следовательно, 1 minute and 0 seconds недействительно, 
но это должно быть просто 1 minute.

Единица времени должна использоваться «насколько это возможно». 
Это означает, что функция должна возвращать не 61 seconds, 
а 1 minute and 1 secondв место этого. Формально продолжительность, 
указанная параметром компонента, не должна превышать 
любую допустимую более значащую единицу времени.

*/
