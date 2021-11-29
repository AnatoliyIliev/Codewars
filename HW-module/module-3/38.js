const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName)
    return this.potions
    // Пиши код выше этой строки
  },
  
};


console.log(atTheOldToad.addPotion('Невидимка'));
console.log(atTheOldToad.addPotion('Зелье силы'));



/*  
Задача. Добавляем новое зелье
Задание
Дополни метод addPotion(potionName) так,
 чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

Тесты
Объявлена переменная atTheOldToad.

Значение переменной atTheOldToad это объект.

Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].

Значение свойства atTheOldToad.addPotion это метод объекта.

После первого вызова метода atTheOldToad.addPotion('Невидимка'), 
в свойстве potions будет массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка'].

После второго вызова метода atTheOldToad.addPotion('Зелье силы'), 
в свойстве potions будет массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка', 'Зелье силы'].
console.log();
console.log();
console.log();
console.log();
console.log();
*/