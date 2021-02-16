function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const message = (`Вы заказали дроидов на сумму ${orderedQuantity * pricePerDroid + deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`);
  return message;
  };

console.log(makeOrderMessage(2, 100, 50)); 
console.log(makeOrderMessage(4, 300, 100)); 
console.log(makeOrderMessage(10, 70, 200)); 