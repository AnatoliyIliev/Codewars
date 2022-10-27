class Journey {
  constructor(object, crew, balloons) {
    this.object = object.weight;
    this.crew = crew;
    this.balloons = balloons;
  }

  isPossible() {
    const { object, crew, balloons } = this;
    const weightOneMen = 80;
    const lifttOneBalloons = 4.8 / 1000;
    // console.log(object + crew * weightOneMen);
    // console.log(balloons * lifttOneBalloons);

    return object + crew * weightOneMen < balloons * lifttOneBalloons;
  }
}

var letterToEllie = { weight: 0.004536 };
var house = { weight: 45000 };
var pushCart = { weight: 95 };
var lawnChair = { weight: 5 };

var flyingCart = new Journey(pushCart, 0, 50);
var loveOfMyLife = new Journey(letterToEllie, 0, 1);
var gravityFalls = new Journey(house, 2, 20622);
console.log(flyingCart.isPossible()); //   false, 'should be false as 50 balloons is not enough!',

console.log(loveOfMyLife.isPossible()); // true, "should be true as 1 balloon is just enough to express one's love on a sheet of paper!",

console.log(gravityFalls.isPossible()); //   false,  'should be false as 20622 balloons is not enough!',

var gravityFallsTake2 = new Journey(house, 2, 9500000);
var flyingCartTake2 = new Journey(pushCart, 0, 20622);
console.log(flyingCartTake2.isPossible()); //    true,   'should be true as the amount of balloons used by animators to lift up the house is just enough to lift up the push cart!',

console.log(gravityFallsTake2.isPossible()); //   true, 'should be false as almost 9.5 millions ballons are needed to lift up the house from Up!',

var lawnChairLarry = new Journey(lawnChair, 1, 45);
var stormAccident = new Journey(lawnChair, 1, 1000);
var lawnChairFlight = new Journey(lawnChair, 1, 18000);
console.log(lawnChairLarry.isPossible()); //  false,    'should be false though first ever balloon flight in a lawn chair was performed by Larry Walters in 1982 with 45 balloons. However those were large wether ballons not the ordinary party balloons we use in our case',

console.log(stormAccident.isPossible()); //  false,   'should be false though the real flight with 1000 party balloons (but much larger than the ones we use) was performed in 2008 by Adelir Antonio de Carli. He was caught in the strom and died in a crash in the Atlantic Ocean',

console.log(lawnChairFlight.isPossible()); // true,  'should be true since about 18000 regular sized party balloons are enough for one person lawn chair flight',

/*
7 kyu
Can this object fly? Balloons in "Up" and in real life


The story of the famous Disney-Pixar animated movie "Up" is based on the main character Carl Fredricksen journey in his home equipped with balloons.

But can this happen for real? What kind of objects can you lift with helium balloons? How many balloons do you need?

In this kata you will create a class

Journey(object, crew, balloons)

so anyone can create objects like

var gravityFalls = new Journey(house, 2, 20622)

which means starting a new journey to Gravity Falls in a house with 2 members of crew (Carl and Russel).

But is this journey possible? Will the house float? Is it enough to have 20622 helium balloons (the number used by Pixar animators in liftoff scene)?

Your Journey class should have a public method isPossible() that returns true or false based on these rules:

1). Every object passed to Journey will have its weight property like

var house = {"weight": 45000};

(we will use metric system in this kata, 45 000 kg is about 100 000 pounds).

2). Each member of the crew weighs 80 kg.

3). We use regular sized party balloons filled with helium. Each balloon lifts 4.8 grams + its own weight.

Can you lift a tiny 95 kg(~200 pound) push cart with 50 balloons like in one of the starting scenes of the movie?

Can one balloon actually carry a message on a single letter-sized paper sheet sent by Carl to his dying wife Ellie in the other scene?

Can the story I heard about man flying in his lawn chair equipped with 1000 balloons be true?

Your coding mastery will reveal answers to these and many other important questions in the tests. Let the journey begin!

OBJECT-ORIENTED PROGRAMMINGFUNDAMENTALS
*/
