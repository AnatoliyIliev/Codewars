function undoRedo(object) {
  const stack = []; // [{x: 1, y: 2}, {x: 1, y: 10}, {x: 1, y: 100}]
  const allState = []; // ['set', 'set', 'set', 'set']
  let redoStack = [];

  const delKeys = obj => {
    for (let key in obj) {
      delete object[key];
    }

    for (let key in object) {
      delete object[key];
      object[key] = obj[key];
    }
  };

  return {
    //set(key, value)Присваивает значение ключу. Если ключ не существует, создает его.
    set: function (key, value) {
      stack.push({ ...object });
      object[key] = value;

      redoStack = [];

      console.log('set', object);
      // console.log('stack', stack);
      // console.log('allState', allState);
    },
    //get(key)Возвращает значение, связанное с ключом.
    get: function (key) {
      return object[key];
    },
    //del(key)удаляет ключ из объекта.
    del: function (key) {
      stack.push({ ...object });
      delete object[key];

      redoStack = [];

      console.log('del', object);
      console.log(stack);
      console.log(allState);
    },
    //undo() Отменить последнюю операцию (set или del) над объектом.
    //Выдает исключение, если нет операции для отмены.
    undo: function () {
      if (!stack) {
        throw new Error('Error, no to undo');
      } else {
        redoStack.push({ ...object });
        object = stack.pop();

        console.log('undo', object);
      }
    },
    //redo() Отменить последнюю операцию отмены (Отменить можно только после отмены).
    //Выдает исключение, если нет операции для повторения.
    redo: function () {
      if (!redoStack) {
        throw new Error('Error, no to redo');
      } else {
        stack.push({ ...object });
        object = redoStack.pop();

        console.log('redo', object);
      }
    },
  };
}
// Любой set/del после undo должен запретить новый повтор.

var obj = {
  x: 1,
  y: 2,
};

var unRe = undoRedo(obj);
// unRe.set('y', 10);
// console.log(unRe.get('y')); //, 10, 'The get method returns the value of a key');
// unRe.undo();
// console.log(unRe.get('y')); //, 2,

//3
unRe.set('y', 10);
unRe.set('y', 100);
unRe.set('x', 150);
unRe.set('x', 50);
console.log(unRe.get('y')); //, 100, 'The get method returns the value of a key');
console.log(unRe.get('x')); //, 50, 'The get method returns the value of a key');
unRe.undo();
console.log(unRe.get('x')); //, 150, 'The undo method restores the previous state');
console.log(unRe.get('y')); //, 100, 'The y key stays the same');
unRe.redo();
console.log(unRe.get('x')); //, 50, 'Undo the x value');
console.log(unRe.get('y')); //, 100, 'The y key stays the same');
unRe.undo();
unRe.undo();
console.log(unRe.get('x')); //, 1, 'Undo the x value');
console.log(unRe.get('y')); //, 100, 'The y key stays the same');
unRe.undo();
unRe.undo();
console.log(unRe.get('y')); //, 2, 'Undo the y value');
console.log(unRe.get('x')); //, 1, 'The x key stays the same');

/*
The purpose of this kata is to implement the undoRedo function.
This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:
set(key, value) Assigns the value to the key. If the key does not exist, creates it.
get(key) Returns the value associated to the key.
del(key) removes the key from the object.
undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.
redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.
After set() or del() are called, there is nothing to redo.
All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.
Any set/del after an undo should disallow new redos.

function undoRedo(object) {
	return {
		set: function(key, value) {},
		get: function(key) {},
		del: function(key) {},
		undo: function() {},
		redo: function() {}
	};
}


Цель этого ката — реализовать undoRedo функцию.

Эта функция принимает объект и возвращает объект, который выполняет следующие действия над объектом, 
переданным в качестве параметра:

set(key, value)Присваивает значение ключу. Если ключ не существует, создает его.

get(key)Возвращает значение, связанное с ключом.

del(key)удаляет ключ из объекта.

undo()Отменить последнюю операцию (установить или удалить) над объектом. 
Выдает исключение, если нет операции для отмены.

redo()Повторить последнюю операцию отмены (повторить можно только после отмены). 
Выдает исключение, если нет операции для повторения.

После того , как set() или del() вызываются, переделывать нечего.

Все действия должны влиять на object переданную undoRedo(object) функцию. 
Таким образом, вы не можете работать с копией объекта.

Любой set/del после undo должен запретить новый повтор.

*/

// describe('tests', function () {
//   it('get/set tests', function () {
//     var obj = {
//       x: 1,
//       y: 2,
//     };

//     var unRe = undoRedo(obj);

//     Test.assertEquals(unRe.get('x'), 1, 'The get method returns the value of a key');
//     unRe.set('x', 3);
//     Test.assertEquals(unRe.get('x'), 3, 'The set method change the value of a key');
//   });

//   it('simple undo', function () {
//     var obj = {
//       x: 1,
//       y: 2,
//     };

//     var unRe = undoRedo(obj);
//     unRe.set('y', 10);
//     Test.assertEquals(unRe.get('y'), 10, 'The get method returns the value of a key');
//     unRe.undo();
//     Test.assertEquals(unRe.get('y'), 2, 'The undo method restores the previous state');
//     try {
//       unRe.undo();
//       Test.expect(false, 'It should have thrown an exception');
//     } catch (e) {
//       Test.assertEquals(unRe.get('y'), 2);
//     }
//   });

//   it('simple redo', function () {
//     var obj = {
//       x: 1,
//       y: 2,
//     };

//     var unRe = undoRedo(obj);
//     unRe.set('y', 10);
//     Test.assertEquals(unRe.get('y'), 10, 'The get method returns the value of a key');
//     unRe.undo();
//     Test.assertEquals(unRe.get('y'), 2, 'The undo method restores the previous state');
//     unRe.redo();
//     Test.assertEquals(unRe.get('y'), 10, 'The undo method restores the previous state');
//     try {
//       unRe.redo();
//       Test.expect(false, 'It should have thrown an exception');
//     } catch (e) {
//       Test.assertEquals(unRe.get('y'), 10);
//     }
//   });

//   it('undo/redo', function () {
//     var obj = {
//       x: 1,
//       y: 2,
//     };

//     var unRe = undoRedo(obj);
//     unRe.set('y', 10);
//     unRe.set('y', 100);
//     unRe.set('x', 150);
//     unRe.set('x', 50);
//     Test.assertEquals(unRe.get('y'), 100, 'The get method returns the value of a key');
//     Test.assertEquals(unRe.get('x'), 50, 'The get method returns the value of a key');
//     unRe.undo();
//     Test.assertEquals(unRe.get('x'), 150, 'The undo method restores the previous state');
//     Test.assertEquals(unRe.get('y'), 100, 'The y key stays the same');
//     unRe.redo();
//     Test.assertEquals(unRe.get('x'), 50, 'Undo the x value');
//     Test.assertEquals(unRe.get('y'), 100, 'The y key stays the same');
//     unRe.undo();
//     unRe.undo();
//     Test.assertEquals(unRe.get('x'), 1, 'Undo the x value');
//     Test.assertEquals(unRe.get('y'), 100, 'The y key stays the same');
//     unRe.undo();
//     unRe.undo();
//     Test.assertEquals(unRe.get('y'), 2, 'Undo the y value');
//     Test.assertEquals(unRe.get('x'), 1, 'The x key stays the same');
//     try {
//       unRe.undo();
//       Test.expect(false, 'It should have thrown an exception');
//     } catch (e) {
//       Test.assertEquals(unRe.get('y'), 2, 'There is nothing to undo');
//     }
//     unRe.redo();
//     unRe.redo();
//     unRe.redo();
//     unRe.redo();
//     Test.assertEquals(unRe.get('y'), 100, 'y key redo state');
//     Test.assertEquals(unRe.get('x'), 50, 'y key redo state');
//     try {
//       unRe.redo();
//       Test.expect(false, 'It should have thrown an exception');
//     } catch (e) {
//       Test.assertEquals(unRe.get('y'), 100, 'There is nothing to redo');
//     }
//   });

//   it('new key', function () {
//     var obj = {
//       x: 1,
//       y: 2,
//     };

//     var unRe = undoRedo(obj);
//     unRe.set('z', 10);
//     Test.assertEquals(unRe.get('z'), 10, 'A new key has been added');
//     unRe.undo();
//     Test.assertEquals(unRe.get('z'), undefined, 'The z key should not exist');
//     unRe.redo();
//     Test.assertEquals(unRe.get('z'), 10, 'A new key has been added');
//   });

//   it('delete key', function () {
//     var obj = {
//       x: 1,
//       y: 2,
//     };

//     var unRe = undoRedo(obj);
//     unRe.del('x');
//     Test.assertEquals(unRe.get('x'), undefined, 'The x key should not exist');
//     Test.expect(!obj.hasOwnProperty('x'), 'The x key should be deleted');
//     unRe.undo();
//     Test.assertEquals(unRe.get('x'), 1, 'A new key has been added');
//     unRe.redo();
//     Test.assertEquals(unRe.get('x'), undefined, 'The x key should not exist');
//     Test.expect(!obj.hasOwnProperty('x'), 'The x key should be deleted');
//   });
// });

// function undoRedo(object) {
//   let stack = [];
//   let currentPosition = 0;

//   let undoCount = 0;
//   let redoCount = 0;

//   stack.push({ ...object });

//   return {
//     //set(key, value)Присваивает значение ключу. Если ключ не существует, создает его.
//     set: function (key, value) {
//       object[key] = value;
//       stack.push({ ...object });
//       currentPosition += 1;
//       undoCount += 1;
//     },
//     //get(key)Возвращает значение, связанное с ключом.
//     get: function (key) {
//       return object[key];
//     },
//     //del(key)удаляет ключ из объекта.
//     del: function (key) {
//       delete object[key];
//       stack.push({ ...object });
//       currentPosition += 1;
//       undoCount += 1;
//     },
//     //undo() Отменить последнюю операцию (set или del) над объектом.
//     //Выдает исключение, если нет операции для отмены.
//     undo: function () {
//       if (currentPosition !== 0 || undoCount === 0) {
//         throw new Error('Error, no to undo');
//       } else {
//         // stack.pop();
//         object = stack[currentPosition - 1];

//         currentPosition -= 1;
//         undoCount -= 1;
//         redoCount += 1;

//         return object;
//       }
//     },
//     //redo() Повторить последнюю операцию отмены (повторить можно только после отмены).
//     //Выдает исключение, если нет операции для повторения.
//     redo: function () {
//       if (currentPosition !== 0 || redoCount === 0) {
//         throw new Error('Error, no to redo');
//       } else {
//         stack.pop();
//         object = stack[currentPosition - 1];

//         currentPosition -= 1;

//         redoCount -= 1;

//         return object;
//       }
//     },
//   };
// }

// function undoRedo(object) {
//   let undoStack = [];
//   let redoStack = [];

//   return {
//     //set(key, value)Присваивает значение ключу. Если ключ не существует, создает его.
//     set: function (key, value) {
//       undoStack.push({ ...object });
//       object[key] = value;
//       redoStack = [];
//     },
//     //get(key)Возвращает значение, связанное с ключом.
//     get: function (key) {
//       return object[key];
//     },
//     //del(key)удаляет ключ из объекта.
//     del: function (key) {
//       undoStack.push({ ...object });
//       delete object[key];
//       redoStack = [];
//     },
//     //undo() Отменить последнюю операцию (set или del) над объектом.
//     //Выдает исключение, если нет операции для отмены.
//     undo: function () {
//       if (undoStack.length === 0) {
//         throw new Error('Error, no to undo');
//       } else {
//         redoStack.push({ ...object });
//         object = undoStack.pop();
//         return object;
//       }
//     },
//     //redo() Отменить последнюю операцию отмены (Отменить можно только после отмены).
//     //Выдает исключение, если нет операции для повторения.
//     redo: function () {
//       if (redoStack.length === 0) {
//         throw new Error('Error, no to redo');
//       } else {
//         undoStack.push({ ...object });
//         object = redoStack.pop();
//         return object;
//       }
//     },
//   };
// }

// function undoRedo(object) {
//   function History(type, key, oldValue, newValue) {
//     this.type = type;
//     this.key = key;
//     this.oldValue = oldValue;
//     this.newValue = newValue;
//   }
//   function UndoLimitException() {
//     this.name = 'UndoLimitException';
//     this.message = 'cannot undo';
//   }
//   function RedoLimitException() {
//     this.name = 'RedoLimitException';
//     this.message = 'cannot redo';
//   }

//   var history = [];
//   var index = 0;
//   return {
//     set: function (key, value) {
//       if (object.hasOwnProperty(key)) history.push(new History('set', key, object[key], value));
//       else history.push(new History('new', key, null, value));
//       object[key] = value;
//       index++;
//       history.length = index;
//     },
//     get: function (key) {
//       return object[key];
//     },
//     del: function (key) {
//       history.push(new History('del', key, object[key], null));
//       delete object[key];
//       index++;
//       history.length = index;
//     },
//     undo: function () {
//       if (index <= 0) throw new UndoLimitException();
//       index--;

//       var h = history[index];
//       if (h.type == 'set') object[h.key] = h.oldValue;
//       else if (h.type == 'new') delete object[h.key];
//       else if (h.type == 'del') object[h.key] = h.oldValue;
//     },
//     redo: function () {
//       if (index >= history.length) throw new RedoLimitException();

//       var h = history[index];
//       if (h.type == 'set') object[h.key] = h.newValue;
//       else if (h.type == 'new') object[h.key] = h.newValue;
//       else if (h.type == 'del') delete object[h.key];

//       index++;
//     },
//   };
// }

// function undoRedo(object) {
//   const undoArchive = [];
//   let redoArchive = [];
//   let undoCount = 0;

//   return {
//     ...object,
//     set: function (key, value) {
//       undoArchive.push({ ...object });

//       object[key] = value;

//       undoCount = 0;
//       redoArchive = [];
//     },
//     get: function (key) {
//       return object[key];
//     },
//     del: function (key) {
//       undoArchive.push({ ...object });

//       delete object[key];
//       undoCount = 0;
//       redoArchive = [];
//     },
//     undo: function () {
//       if (!undoArchive.length) {
//         throw new Error('nothing to undo');
//       } else {
//         let lastObj = undoArchive.pop();
//         redoArchive.push({ ...object });

//         for (let prop in object) {
//           delete object[prop];
//         }

//         for (let prop in lastObj) {
//           delete object[prop];
//           object[prop] = lastObj[prop];
//         }
//         undoCount++;
//       }
//     },
//     redo: function () {
//       if (undoCount <= 0) {
//         throw new Error('nothing to redo');
//       } else {
//         undoArchive.push({ ...object });
//         let lastObj = redoArchive.pop();

//         for (let prop in object) {
//           delete object[prop];
//         }

//         for (let prop in lastObj) {
//           delete object[prop];
//           object[prop] = lastObj[prop];
//         }
//         undoCount--;
//       }
//     },
//   };
// }
