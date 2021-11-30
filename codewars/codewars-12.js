function openOrSenior(data) {
  const change = data.map(el => {
    if (el[0] >= 55 && el[1] > 7) return 'Senior';
    else return 'Open';
  });
  return change;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]),
); // ['Open', 'Senior', 'Open', 'Senior'],

console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ]),
); //  ['Open', 'Open', 'Open', 'Open'],

console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ]),
); // ['Senior', 'Open', 'Open', 'Open'],);

/*

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
 In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell: Open or Senior)
 stating whether the respective member is to be placed in the senior or open category.

Example
input =  [(18, 20), (45, 2), (61, 12), (37, 6), (21, 21), (78, 9)]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
FUNDAMENTALS RULES



Крокет-клуб Western Suburbs имеет две категории членства: 
Senior и Open. Им нужна ваша помощь с формой заявки, 
в которой потенциальным членам будет указано, в какую категорию они будут помещены.

Чтобы быть взрослым, член должен быть не моложе 55 лет и 
иметь инвалидность больше 7. 
В этом крокет-клубе гандикапы варьируются от -2 до +26; чем лучше игрок, тем меньше гандикап.

Вход
Вход будет состоять из списка пар. Каждая пара содержит информацию 
об одном потенциальном члене. Информация состоит из 
целого числа для возраста человека и целого числа для инвалидности.

Выход
Вывод будет состоять из списка строковых значений 
(в Haskell: Openили Senior), указывающих, должен ли соответствующий 
элемент быть помещен в старшую или открытую категорию.

*/
