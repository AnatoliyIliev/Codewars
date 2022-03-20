// Variant 1
function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}

// Variant 2
// function launchAll(launchMissile) {
//   for (var i = 0; i < 5; i++) {
//     delay(i);
//   }
// }

// function delay(a) {
//   setTimeout(function () {
//     launchMissile(a);
//   }, a * 1000);
// }

function launchMissile(r) {
  console.log('Rocket', r);
}

launchAll(launchMissile);

/*

function launchAll(launchMissile) {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}

Our nuclear missile manager system is coded in Node.js. 
We are currently testing the system and it seems that 
the launchAll function does not work as expected. 
It should launch 5 missiles each 1 second apart. 
The current code tries to launch the missile #5 five times...

Can you fix this for us? You know, it's pretty critical code...

Note: There are 5 missiles labeled i which 
is a number in {0, 1, 2, 3, 4}. 
The missile i should be launched after i seconds.

*/
