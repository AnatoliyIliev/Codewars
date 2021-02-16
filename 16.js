function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
   if (available > ordered) { 
      message = 'Заказ оформлен, с вами свяжется менеджер';
    } else {
      message = 'На складе недостаточно товаров!';
    }
    // Пиши код выше этой строки
    return message;
  }

console.log(checkStorage(100, 50)); 
console.log(checkStorage(100, 130)); 
console.log(checkStorage(200, 20)); 
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180)); 
  

//available - общее количество товаров на складе
//ordered - единиц товара в заказе