const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  allName = []

  for (const product of products) {
      const keys = Object.keys(product);

    for (const productName of keys) { 

      if (productName === propName) {

        allName.push(product[propName])
      }
    }
  }
  return allName
}
  // Пиши код выше этой строки
  
  

  console.log(getAllPropValues('name'));
  console.log(getAllPropValues('quantity'));
  console.log(getAllPropValues('price'));
  console.log(getAllPropValues('category'));
  

/*  
Задача. Коллекция значений свойства
Задание
Напиши функцию getAllPropValues(propName) которая принимает один параметр 
propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства
с таким именем из каждого объекта в массиве products. Если в объектах нет свойства
с таким именем, функция должна вернуть пустой массив.

Тесты
Объявлена функция getAllPropValues(propName).
Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
Вызов getAllPropValues('category') возвращает [].

*/