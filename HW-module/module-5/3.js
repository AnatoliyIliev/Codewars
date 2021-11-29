function Car(brand, model, price){
	this.brand = brand;
  	this.model = model;
  	this.price = price;
}

// const superCar = new Car(brand, model, price);
const Audi = new Car('Audi', 'Q3', 36000);
const BMW = new Car('BMW', 'X5', 58900);
const Nissan = new Car('Nissan', 'Murano', 31700);
console.log(Audi)

// console.log(new Car('Audi', 'Q3', 36000))
// console.log(new Car('BMW', 'X5', 58900))
// console.log(new Car('Nissan', 'Murano', 31700))

/*
const dog = Object.create(animal);

Задание
Объяви функцию-конструктор Car которая принимает три параметра:

brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Функция Car должна создавать объект с одноимёнными свойствами brand, model и price,
 значениями которых должны быть переданные аргументы во время её вызова с оператором new.

Тесты
Объявлена функция Car(brand, model, price).
В результате вызова new Car('Audi', 'Q3', 36000) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
В результате вызова new Car('BMW', 'X5', 58900) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
В результате вызова new Car('Nissan', 'Murano', 31700) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.



Теория
Функция-конструктор
Синтаксис литерала объекта позволяет создать один объект.
 Но часто нужно создать много однотипных объектов с одинаковым
  набором свойств, но разными значениями, и методами для взаимодействия 
  со свойствами. Всё это нужно сделать динамически, во время выполнения
   программы. Для этого используют функции-конструкторы, 
   вызывая их при помощи специального оператора new.

function User() {
  // Тело функции
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}
Любая функция, кроме стрелочной, может быть использована как конструктор. 
Чтобы отличить конструктор от обычной функции, их принято называть
 с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).

Вызов функции с оператором new приводит к созданию нового объекта 
и вызову функции в контексте этого объекта. То есть this внутри функции
 будет ссылаться на новосозданный объект. Это позволяет добавлять каждому 
 объекту свойства с одинаковыми именами, но разными значениями.

function User(name, email, age) {
  this.name = name;
  this.email = email;
}

const mango = new User('Манго', 'mango@mail.com');
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User('Поли', 'poly@mail.com');
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
*/