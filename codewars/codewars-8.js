function friend(friends) {
  let allFriends = [];
  const myFriends = friends.map(friend => {
    if (friend.length === 4) {
      allFriends.push(friend);
      return allFriends;
    }
  });
  return allFriends;
}

console.log(friend(['Ryan', 'Kieran', 'Mark'])); //, ['Ryan', 'Mark']);
// console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])); //, ['Ryan']);
// console.log(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])); //,['Jimm', 'Cari', 'aret'],);
// console.log(friend(['Love', 'Your', 'Face', '1'])); //, ['Love','Your','Face',];

/*

Создайте программу, которая фильтрует список строк
и возвращает список только с именами ваших друзей.

Если в имени ровно 4 буквы, можете быть уверены, 
что это должен быть ваш друг! В противном случае можете быть уверены, что он не ...

Make a program that filters a list of strings 
and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, 
you can be sure that it has to be a friend of yours! 
Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

*/
