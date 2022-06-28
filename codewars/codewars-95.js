function Event() {
  this.handlers = [];
}

Event.prototype = {
  subscribe(func) {
    this.handlers.push(func);
  },
  unsubscribe(item) {
    this.handlers = this.handlers.filter(handler => {
      if (handler !== item) {
        return item;
      }
    });
  },
  emit() {
    this.handlers.forEach(item => {
      item.apply(this, [...arguments]);
    });
  },
};

var event = new Event();

function f() {
  f.calls = (f.calls || 0) + 1;
  f.args = Array.prototype.slice.call(arguments);
}

event.subscribe(f);
event.emit(1, 'foo', true);

console.log(f.calls === 1); // calls a handler
console.log(f.args, [1, 'foo', true]); // passes arguments

event.unsubscribe(f);
event.emit(2);

console.log(f.calls === 1); //no second call

/*

у него есть метод .subscribe() , который принимает функцию и сохраняет ее как обработчик
у него есть метод .unsubscribe() , который берет функцию и удаляет ее из своих обработчиков.
у него есть метод .emit() , который принимает произвольное количество аргументов 
и вызывает все сохраненные функции с этими аргументами


Your goal is to write an Event constructor function, which can be used to make event objects.

An event object should work like this:

it has a .subscribe() method, which takes a function and stores it as its handler
it has an .unsubscribe() method, which takes a function and removes it from its handlers
it has an .emit() method, which takes an arbitrary number of arguments and calls all the stored functions with these arguments
As this is an elementary example of events, there are some simplifications:

all functions are called with correct arguments (e.g. only functions will be passed to unsubscribe)
you should not worry about the order of handlers' execution
the handlers will not attempt to modify an event object (e.g. add or remove handlers)
the context of handlers' execution is not important
each handler will be subscribed at most once at any given moment of time. It can still be unsubscribed and then subscribed again
Also see an example test fixture for suggested usage
*/

/*
Ваша цель — написать функцию конструктора событий, которую можно использовать для создания объектов событий.

Объект события должен работать следующим образом:

у него есть метод .subscribe(), который принимает функцию и сохраняет ее как обработчик
у него есть метод .unsubscribe(), который берет функцию и удаляет ее из своих обработчиков.
у него есть метод .emit(), который принимает произвольное количество аргументов 
и вызывает все сохраненные функции с этими аргументами
Так как это элементарный пример событий, есть некоторые упрощения:

все функции вызываются с правильными аргументами (например, для отмены подписки будут переданы только функции)
можно не беспокоиться о порядке выполнения обработчиков
обработчики не будут пытаться изменить объект события (например, добавить или удалить обработчики)
контекст выполнения обработчиков не важен
каждый обработчик будет подписан не более одного раза в любой момент времени. 
Его все еще можно отписать, а затем снова подписаться
Также см. пример тестового приспособления для рекомендуемого использования.
*/
