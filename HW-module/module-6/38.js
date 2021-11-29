// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  const inScoreOrder = [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance,
  );
  return inScoreOrder;
};
// Пиши код выше этой строки

/*const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
*/

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

console.log(sortByAscendingBalance(users));

/*
  Задание
Дополни функцию sortByAscendingBalance(users) так, 
чтобы она возвращала массив пользователей отсортированный 
по возрастанию их баланса (свойство balance).

Тесты
Объявлена переменная sortByAscendingBalance.
Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users).
Значение параметра users не изменяется.
Вызов функции с указанным массивом пользователей возвращает 
новый массив пользователей отсортированный по возрастанию их баланса.

Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
Для перебора параметра users использован метод sort().
*/
