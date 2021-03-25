function Storage(items) {
  this.items = items;
  //   console.log(items);
}

Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (newItem) {
  //   this.newItem = newItem;
  this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
  //   this.item = item;
  this.items.splice(this.items.indexOf(item), 1);
};

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

console.log(Storage.prototype.hasOwnProperty('getItems'));
console.log(Storage.prototype.hasOwnProperty('addItem'));
console.log(Storage.prototype.hasOwnProperty('removeItem'));
console.log(new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']));
console.log(Storage.prototype.isPrototypeOf(storage));

/*
Задача. Хранилище
Задание
С помощью Function Declaration напиши функцию-конструктор Storage, 
которая будет создавать объекты для управления складом товаров.
 Функция ожидает только один аргумент - начальный массив товаров,
  который записывается на создаваемый объект в свойство items.

Добавь методы на прототип:

getItems() - возвращает массив текущих товаров в свойстве items объекта, 
который вызывает этот метод.

addItem(newItem) - принимает новый товар newItem и добавляет его в массив 
товаров в свойстве items объекта, который вызывает этот метод.

removeItem(item) - принимает товар item и удаляет его из массива товаров
 в свойстве items объекта, который вызывает этот метод.

Под комментарием мы добавили инициализацию экземпляра и вызовы методов 
в той последовательности, в которой твой код будут проверять тесты. 
Пожалуйста ничего там не меняй.

Тесты
Объявлена функция Storage(items).
Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение переменной storage это объект.
Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
У объекта storage есть свойство items.
Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор"].
Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив ["Нанитоиды", "Антигравитатор", "Дроид"].

*/
