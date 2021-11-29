// Пиши код ниже этой строки
const getActiveUsers = (users) => {
 let allFriends = []
   users.filter(user => {
    if (user.isActive) {
    allFriends.push(user)
     }
   });
  return allFriends
};
// Пиши код выше этой строки

// Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]

console.log(getActiveUsers(users));

/*
Задание
Дополни функцию getActiveUsers(users) так, 
чтобы она возвращала массив активных пользователей, 
значение свойства isActive которых true.

Тесты
Объявлена переменная getActiveUsers. 
Переменной getActiveUsers присвоена стрелочная функция с параметром users.
Для перебора параметра users используется метод filter().
Вызов функции с указанным массивом пользователей возвращает 
массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

*/