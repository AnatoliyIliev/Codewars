// Пиши код ниже этой строки
const getFriends = users => {
  let allFriends = []
  users.filter((user) => allFriends.push(...user.friends));

  return allFriends.filter((user, index, array) => array.indexOf(user) === index);
};
// Пиши код выше этой строки

/*
['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 
'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 
'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman'].
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
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

console.log(getFriends(users));

/*
Задание
Дополни функцию getFriends(users) так, 
чтобы она возвращала массив друзей всех пользователей (свойство friends). 
У нескольких пользователей могут быть одинаковые друзья, 
сделай так чтобы возвращаемый массив не содержал повторений.

Тесты
Объявлена переменная getFriends.
Переменной getFriends присвоена стрелочная функция с параметром (users).
Вызов функции с указанным массивом пользователей возвращает массив 
['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 
'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson',
 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman'].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/
