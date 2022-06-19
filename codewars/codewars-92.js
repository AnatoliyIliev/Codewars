function generateName() {
  const alpabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let str = '';

  for (let i = 0; i < 6; i += 1) {
    str += alpabet[Math.floor(Math.random() * alpabet.length)];
  }
  return str;
}

var name = generateName();
console.log(name);
console.log(typeof name); //, 'string', 'Name has to be a string.');
// console.log(photoManager.nameWasUnique(name)); //, true, 'Name has to be unique.');
console.log(name.length); //, 6, 'Name has to be 6 digits long.');

/*

You are developing an image hosting website.

You have to create a function for generating random and unique image filenames.

Create a function for generating a random 6 character string which will be used to access the photo URL.

To make sure the name is not already in use, you are given access to an PhotoManager object.

You can call it like so to make sure the name is unique

// at this point, the website has only one photo, hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
Note: We consider two names with same letters but different cases to be unique.

*/
