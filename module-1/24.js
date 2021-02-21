
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
  if (totalSpent >= 50000){
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000)
  {
    discount = SILVER_DISCOUNT;
  }
    else if (totalSpent >= 5000 && totalSpent < 20000)
  {
    discount = BRONZE_DISCOUNT;
  }
    else if (totalSpent < 5000) 
  {
    discount = BASE_DISCOUNT;
  }
  // Пиши код выше этой строки
  return discount;
}


console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));


//Если потрачено от 50000 или больше кредитов - скидка 10% (золотой партнёр)
//Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
//Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
//Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)