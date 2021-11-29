function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  const newData = {completed: false, category: 'Общее', priority: 'Обычный'}
  // console.log(newData)
  return {...newData, ...data}

  // Пиши код выше этой строки
}

  
  console.log(makeTask({}));
  console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
  console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
  console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
  console.log(makeTask({ text: 'Купить хлеб' }));
  

/*  
Задача. Карточки задач
Задание
Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
 В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, 
category и priority, могут отсутствовать. Тогда, в новом объекте задачи, 
в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

Тесты
Объявлена функция makeTask(data).
Вызов makeTask({}) возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
Вызов makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }) возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
Вызов makeTask({ category: 'Финансы', text: 'Забрать проценты' }) возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
Вызов makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }) возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
Вызов makeTask({ text: 'Купить хлеб' }) возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.


console.log();
console.log();
console.log();
console.log();
console.log();
*/