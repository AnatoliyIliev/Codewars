// return the nested property value if it exists,
// otherwise return undefined
// возвращаем значение вложенного свойства, если оно существует,
// иначе вернуть неопределенное значение

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

Object.prototype.hash = function (string) {
  return string.split('.').reduce((res, result) => {
    return res ? res[result] : undefined;
  }, this);
};

console.log(obj.hash('person.name')); //, 'joe');
console.log(obj.hash('person.game.home')); //, undefined);

/*

You are given a complex object that has many deeply nested variables. 
You don't want to go the usual if obj.property == null route. 
Create a prototype method that given a nested path, 
either return the value or undefined.

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined


Вам дан сложный объект, который имеет множество глубоко вложенных переменных. 
Вы не хотите идти по обычному маршруту if obj.property == null. 
Создайте метод-прототип, который с учетом вложенного пути
либо возвращает значение, либо не определено.

*/
