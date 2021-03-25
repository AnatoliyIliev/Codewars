// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => {
    if (user.friends === friendName) {
      return user;
    }
  });
};
// Пиши код выше этой строки

/*
'Briana Decker', = Sharlene Bush и Sheree Anthony.
'Goldie Gentry', = Elma Head и Sheree Anthony.
'Adrian Cross', = пустой массив.
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

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
console.log(getUsersWithFriend(users, 'Adrian Cross'));

/*
Задание
Дополни функцию getUsersWithFriend(users, friendName) так, 
чтобы она возвращала массив пользователей у которых есть друг 
с именем в параметре friendName. Массив друзей пользователя хранится 
в свойстве friends.

Тесты
Объявлена переменная getUsersWithFriend.
Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName).
Для перебора параметра users используется метод filter().
Если значение параметра friendName это строка 'Briana Decker', функция возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony.
Если значение параметра friendName это строка 'Goldie Gentry', функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony.
Если значение параметра friendName это строка 'Adrian Cross', функция возвращает пустой массив.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
*/
