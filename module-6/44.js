// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
   return users.filter(user => user.gender === gender)
    .reduce((total, user) => {
 	return total + user.balance;
    }, 0);
};
// Пиши код выше этой строки

//'male', функция возвращает число 12053.
//'female', функция возвращает число 8863.

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

// const gender = 'male'
// console.log(getTotalBalanceByGender(users, gender))

const gender = 'female'
console.log(getTotalBalanceByGender(users, gender))
/*

Задание
Дополни функцию getTotalBalanceByGender(users, gender) так, 
чтобы она возвращала общий баланс пользователей (свойство balance), 
пол которых (свойство gender) совпадает со значением параметра gender.

Тесты
Объявлена переменная getTotalBalanceByGender.
Переменной getTotalBalanceByGender присвоена стрелочная функция
 с параметрами (users, gender).

В теле функции используется цепочка методов в правильном порядке.
Значение параметра users не изменяется.
Если значение параметра gender это строка 'male', функция возвращает число 12053.
Если значение параметра gender это строка 'female', функция возвращает число 8863.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

*/