// Колбэк-функция
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);

};
  
// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
};
  

registerGuest('Манго', greet)

/* 
console.log(); 
console.log(); 
console.log(); 
console.log(); 
console.log(); 
*/
