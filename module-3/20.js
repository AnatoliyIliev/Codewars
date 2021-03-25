  
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    for (const product of products) {
      if(product['name'] === productName){
        return (product['price'] * product['quantity'])
      }
    }
    return 0
  }
  
  

console.log(calculateTotalPrice('Бластер'));
console.log(calculateTotalPrice('Радар'));
console.log(calculateTotalPrice('Дроид'));
console.log(calculateTotalPrice('Захват'));
console.log(calculateTotalPrice('Сканер'));
  

/*  
Задача. Общая стоимость товара
Задание
Напиши функцию calculateTotalPrice(productName) которая принимает 
один параметр productName - название товара. Функция должна вернуть 
общую стоимость (цена * количество) товара с таким именем из массива products.

Тесты
Объявлена функция calculateTotalPrice(productName).
Вызов calculateTotalPrice('Бластер') возвращает 0.
Вызов calculateTotalPrice('Радар') возвращает 5200.
Вызов calculateTotalPrice('Дроид') возвращает 2800.
Вызов calculateTotalPrice('Захват') возвращает 10800.
Вызов calculateTotalPrice('Сканер') возвращает 8100.


console.log();
console.log();
console.log();
console.log();
console.log();
*/