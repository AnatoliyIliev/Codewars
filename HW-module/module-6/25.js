// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
   return users.find((user) => user.email === email);
};
// Пиши код выше этой строки

// Sheree Anthony.
// Elma Head.
// Blackburn Dotson.
// undefined.

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
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
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

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'))
console.log(getUserWithEmail(users, 'elmahead@omatom.com'))
console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'))
console.log(getUserWithEmail(users, 'shereeadfghdfhdfghdfnthony@kog.com'))
/*

Задание
Дополни функцию getUserWithEmail(users, email) так, 
чтобы она возвращала объект пользователя, 
почта которого (свойство email) совпадает со значением параметра email.

Тесты
Объявлена функция getUserWithEmail(users, email).

Для перебора параметра users используется метод find().

Если значение параметра email это 'shereeanthony@kog.com', 
функция возвращает объект пользователя с именем Sheree Anthony.

Если значение параметра email это 'elmahead@omatom.com', 
функция возвращает объект пользователя с именем Elma Head.

Если значение параметра email это 'blackburndotson@furnigeer.com', 
функция возвращает объект пользователя с именем Blackburn Dotson.

Если в массиве users нет пользователя с почтой из параметра email, 
функция возвращает undefined.

Вызов функции со случайными, но валидными аргументами, 
возвращает правильное значение.

*/