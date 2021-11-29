function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case 'professional': // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;

    case 'starter': // Дополни эту строку
      price = 0; // Дополни эту строку
      break;
  }

  // Пиши код выше этой строки
  return price;
}


console.log(getSubscriptionPrice('professional')); 
console.log(getSubscriptionPrice('organization')); 
console.log(getSubscriptionPrice('starter')); 
